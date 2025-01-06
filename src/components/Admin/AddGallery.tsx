import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { image, plus } from "@/src/assets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "@/src/styles";
import { FormEvent, useRef, useState, ChangeEvent, useEffect } from "react";
import { AxiosResponse, AxiosError } from "axios";
import axios from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase";

interface FormData {
  title: string;
  image: File | null;
  linkUrl: string;
  gallery_type: string;
  photos: File[] | null;
}

const AddGallery = () => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [images, setImages] = useState<string[]>([]);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const imagesInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    linkUrl: "",
    image: null,
    gallery_type: "album",
    photos: null,
  });
  const [isAlbum, setIsAlbum] = useState<boolean>(true);

  useEffect(() => {
    if (formData.gallery_type === "event") {
      setIsAlbum(false);
      setFormData((prevState) => ({ ...prevState, linkUrl: "" }));
    } else {
      setIsAlbum(true);
      setFormData((prevState) => ({ ...prevState, photos: null }));
      setImages([]);
    }
  }, [formData.gallery_type]);

  const navigate = useNavigate();

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, data saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(null);
    setFormData({
      title: "",
      linkUrl: "",
      image: null,
      gallery_type: "album",
      photos: null,
    });
    setImages([]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e: any) => {
    const files: File[] = Array.from(e.target.files);
    if (files) {
      setFormData((prevState) => ({ ...prevState, photos: files }));
    }
    const imageUrls = files.map((file: any) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file = files?.[0];
    const maxSize = 20 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 20mb");
      return;
    } else {
      setImagePreview(file);
      setFormData((prevState) => ({ ...prevState, image: file || null }));
    }
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const selectPhotos = () => {
    imagesInputRef.current?.click();
  };

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, gallery_type: value }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Submit Data to the Server
    try {
      // Get the authentication token
      const user = auth.currentUser;
      const idToken = await user?.getIdToken();

      if (!user || !idToken) {
        toast.error("You must be logged in to perform this action");
        return;
      }

      // Validate required fields
      if (!formData.title.trim()) {
        toast.warning("Title is required");
        return;
      }

      if (!formData.image) {
        toast.warning("Please upload a cover image");
        return;
      }

      // Create FormData object
      const submitData = new FormData();
      submitData.append("title", formData.title.trim());
      submitData.append("type", formData.gallery_type);
      submitData.append("image", formData.image);

      // Handle conditional fields based on gallery type
      if (formData.gallery_type === "album") {
        submitData.append("linkUrl", formData.linkUrl.trim());
        submitData.append("photos", "");
      } else if (formData.gallery_type === "event" && formData.photos?.length) {
        // Append multiple photos for event type
        formData.photos.forEach((photo) => {
          submitData.append("photos", photo);
        });
        submitData.append("linkUrl", "");
      }

      setIsSaving(true);
      // Make API request
      const response: AxiosResponse = await axios.post("/gallery", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (response.data) {
        toast.success("Gallery created successfully!");
        setIsSaving(false);
        setIsOpen(false);
        navigate("/admin/gallery");
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorMessage = "Error occurred while creating gallery";
      toast.error(errorMessage);
      setIsSaving(false);
      console.error("Error:", axiosError);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Gallery
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-center font-nunito text-lg font-semibold">
              Add Gallery
            </DialogTitle>
            <DialogDescription className="text-center">
              All fields are required unless otherwise indicated.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 my-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                onChange={handleInputChange}
                id="title"
                placeholder="Enter photo title"
                name="title"
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="image">Cover image</Label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/jpeg, image/png"
                ref={imageInputRef}
                onChange={handleImageInputChange}
                className="hidden"
              />
              {imagePreview ? (
                <div className="flex items-center gap-4">
                  <img
                    src={URL.createObjectURL(imagePreview)}
                    className="h-40 w-40 object-cover object-center"
                  />
                  <button
                    type="button"
                    className="bg-secondary text-white py-2 px-4 text-sm rounded-lg"
                    onClick={handleFileSelector}
                  >
                    Change Image
                  </button>
                </div>
              ) : (
                <div
                  onClick={handleFileSelector}
                  className="cursor-pointer w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
                >
                  <img src={image} className="w-6 h-6" />
                  <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                    Click to upload image
                  </p>
                </div>
              )}
              <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                Max File Size: 20 MB (jpg, png)
              </p>
            </div>

            <div>
              <Label htmlFor="gallery_type">Gallery type</Label>
              <Select onValueChange={handleSelect}>
                <SelectTrigger id="gallery_type" className="w-full">
                  <SelectValue placeholder="Select gallery type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="album">Album</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isAlbum ? (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="link">Album Link</Label>
                <Input
                  type="text"
                  onChange={handleInputChange}
                  id="link"
                  placeholder="Enter link to gallery"
                  name="linkUrl"
                />
              </div>
            ) : (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="photos">Photos</Label>
                <input
                  type="file"
                  multiple
                  accept="image/jpeg, image/png"
                  onChange={handleImageChange}
                  className="hidden"
                  ref={imagesInputRef}
                />
                <div className="mt-4 grid grid-cols-4 gap-4">
                  <div
                    onClick={selectPhotos}
                    className="cursor-pointer p-2 h-[100px] bg-gray-200 text-gray-800 rounded-lg flex flex-col justify-center items-center"
                  >
                    <img src={image} className="w-5 h-5" />
                    <p className="text-sm font-bold font-barlow mt-2">
                      Select photos
                    </p>
                  </div>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[100px] max-h-[100px] rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`preview ${index}`}
                        className="w-full h-full rounded-lg object-center object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="sm:justify-start mt-8">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="border-secondary text-secondary"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-secondary hover:bg-blue-600 text-white w-full mb-2 "
            >
              {saving ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddGallery;
