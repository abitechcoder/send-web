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
import { image } from "@/src/assets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "@/src/styles";
import { FormEvent, useRef, useState, ChangeEvent, useEffect } from "react";
import { AxiosResponse, AxiosError } from "axios";
import axios from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GalleryPropsType } from "@/src/types";
import { auth } from "../../../firebase";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  title: string;
  image: File | null | string;
  linkUrl: string;
  gallery_type: string;
}

const EditGallery = ({
  item,
  setSelectedItem,
}: {
  item: GalleryPropsType;
  setSelectedItem: any;
}) => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    title: item.title,
    linkUrl: item.linkUrl,
    image: item.image,
    gallery_type: item.type,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (item.image) {
      setImagePreview(item.image);
    }
  }, [item]);

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, data saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(item.image);
    setFormData({
      title: item.title,
      linkUrl: item.linkUrl,
      image: item.image,
      gallery_type: item.type,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file: any = files?.[0];
    const maxSize = 20 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 20mb");
      return;
    } else {
      setImagePreview(URL.createObjectURL(file));
      setFormData((prevState) => ({ ...prevState, image: file || null }));
    }
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, gallery_type: value }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Get the authentication token
    const user = auth.currentUser;
    const idToken = await user?.getIdToken();

    if (!user || !idToken) {
      toast.error("You must be logged in to perform this action");
      return;
    }

    const submitData = new FormData();
    submitData.append("title", formData.title);
    submitData.append("linkUrl", formData.linkUrl);
    if (formData.image instanceof File) {
      submitData.append("image", formData.image);
    }

    // Submit Data to the Server
    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.put(
        `/gallery/${item.id}`,
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      if (response.data) {
        toast.success("Gallery updated successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        setSelectedItem(null);
        navigate("/admin/gallery");
      }
    } catch (error) {
      toast.error("Error occured while updating gallery");
      setIsSaving(false);
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="px-4 py-2 font-bold text-sm border flex-1 bg-blue-700 rounded-lg text-white">
        Edit Gallery
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-center font-nunito text-lg font-semibold">
              Edit Gallery
            </DialogTitle>
            <DialogDescription className="text-center">
              Update gallery information.
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
                value={formData.title}
              />
            </div>

            <div>
              <Label htmlFor="gallery_type">Gallery type</Label>
              <Select
                onValueChange={handleSelect}
                value={formData.gallery_type}
              >
                <SelectTrigger id="gallery_type" className="w-full">
                  <SelectValue placeholder="Select gallery type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="album">Album</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {!!formData.linkUrl && (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="link">Album Link</Label>
                <Input
                  type="text"
                  onChange={handleInputChange}
                  id="link"
                  placeholder="Enter link to gallery"
                  name="linkUrl"
                  required
                  value={formData.linkUrl}
                />
              </div>
            )}

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
                    src={imagePreview}
                    alt="gallery image"
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
          </div>

          <DialogFooter className="sm:justify-start ">
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
              {saving ? "Updatinging please wait..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditGallery;
