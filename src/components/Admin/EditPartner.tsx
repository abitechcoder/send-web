import { FormEvent, useRef, useState, ChangeEvent, useEffect } from "react";
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
import { AxiosResponse, AxiosError } from "axios";
import axios from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PartnerProps } from "@/src/types";
import { auth } from "@/firebase";

interface FormData {
  name: string;
  image: File | null | string;
}

const EditPartner = ({
  partner,
  setSelectedPartner,
}: {
  partner: PartnerProps;
  setSelectedPartner: any;
}) => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: partner.name,
    image: partner.logo,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (partner.logo) {
      setImagePreview(partner.logo);
    }
  }, [partner]);

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, data saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(partner.logo);
    setFormData({ name: partner.name, image: partner.logo });
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log("form data", formData);
    // Get the authentication token
    const user = auth.currentUser;
    const idToken = await user?.getIdToken();

    if (!user || !idToken) {
      toast.error("You must be logged in to perform this action");
      return;
    }

    const submitData = new FormData();
    submitData.append("name", formData.name);
    if (formData.image instanceof File) {
      submitData.append("logo", formData.image);
    }

    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.put(
        `/partners/${partner.id}`,
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      if (response.data) {
        toast.success("Partner updated successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        setSelectedPartner(null);
        navigate("/admin/partner");
      }
    } catch (error) {
      toast.error("Error occurred while updating partner");
      setIsSaving(false);
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="px-4 py-2 font-bold text-sm border flex-1 bg-blue-700 rounded-lg text-white">
        Edit Partner
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-center font-nunito text-lg font-semibold">
              Edit Partner
            </DialogTitle>
            <DialogDescription className="text-center">
              Update partner information.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 my-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                onChange={handleInputChange}
                id="name"
                placeholder="Partner name"
                name="name"
                required
                value={formData.name}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="image">Logo</Label>
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
                    alt="Partner logo"
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
                  <img src={image} className="w-6 h-6" alt="Upload icon" />
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

          <DialogFooter className="sm:justify-start">
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
              className="bg-secondary hover:bg-blue-600 text-white w-full mb-2"
            >
              {saving ? "Updating please wait..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPartner;
