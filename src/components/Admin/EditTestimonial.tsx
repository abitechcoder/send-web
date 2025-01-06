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
import { TestimonialProps } from "@/src/types";
import { auth } from "@/firebase";

interface FormDataType {
  name: string;
  image: File | null | string;
  title: string;
  text: string;
  document: File | null | string;
}

const EditTestimonial = ({
  testimonial,
  setSelectedTestimonial,
}: {
  testimonial: TestimonialProps;
  setSelectedTestimonial: any;
}) => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [changeReport, setChangeReport] = useState<Boolean>(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormDataType>({
    name: testimonial.name,
    image: testimonial.image,
    title: testimonial.title,
    text: testimonial.text,
    document: testimonial.link_url,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (testimonial.image) {
      setImagePreview(testimonial.image);
    }
  }, [testimonial]);

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, story saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(testimonial.image);
    setChangeReport(false);
    setFormData({
      name: testimonial.name,
      image: testimonial.image,
      title: testimonial.title,
      text: testimonial.text,
      document: testimonial.link_url,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const file = files?.[0];
    const maxSize = 20 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 20mb");
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "document" ? null : value,
      }));
      return;
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "document" ? file || null : value,
      }));
    }
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
    submitData.append("name", formData.name);
    submitData.append("title", formData.title);
    submitData.append("text", formData.text);
    if (formData.image) {
      submitData.append("image", formData.image);
    } else {
      toast.warning("Please upload image");
      return;
    }

    if (formData.document) {
      submitData.append("document", formData.document);
    } else {
      toast.warning("Please upload case story document");
      return;
    }

    // Submit Data to the Server
    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.put(
        `/testimonials/${testimonial.id}`,
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      if (response.data) {
        toast.success("Testimonial created successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        setSelectedTestimonial(null);
        navigate("/admin/testimonial");
      }
    } catch (error) {
      toast.error("error occurred while creating testimonial");
      setIsSaving(false);
      console.error("Error:", error as AxiosError);
    }
  };

  console.log("Image Preview", imagePreview);
  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="px-4 py-2 font-bold text-sm border flex-1 bg-blue-700 rounded-lg text-white">
        Edit Testimonial
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Edit Testimonial
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter name"
                name="name"
                onChange={handleInputChange}
                required
                value={formData.name}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="image">image</Label>
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

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="report">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                name="title"
                onChange={handleInputChange}
                required
                value={formData.title}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description">Case Story</Label>
              <textarea
                name="text"
                placeholder="Enter case story"
                id="story"
                onChange={handleTextAreaChange}
                required
                rows={10}
                cols={50}
                value={formData.text}
                className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
              ></textarea>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="document">Case Story Document</Label>
              {testimonial.link_url && !changeReport ? (
                <div className="flex items-center gap-8">
                  <p className="text-xs">{testimonial.title} document</p>
                  <p
                    onClick={() => setChangeReport(true)}
                    className="text-blue-600 font-light text-sm bg-gray-200 p-2"
                  >
                    Change report
                  </p>
                </div>
              ) : (
                <div>
                  <Input
                    id="document"
                    name="document"
                    type="file"
                    accept="application/pdf"
                    onChange={handleInputChange}
                  />
                  <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                    Max File Size: 20 MB (pdf)
                  </p>
                </div>
              )}
            </div>
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
              disabled={saving}
              className="bg-secondary hover:bg-blue-600 text-white w-full mb-2 "
            >
              {saving ? "Updating please wait..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTestimonial;
