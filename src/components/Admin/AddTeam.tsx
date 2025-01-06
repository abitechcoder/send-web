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
import { fbLogo, igLogo, image, plus } from "@/src/assets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "@/src/styles";
import { FormEvent, useRef, useState, ChangeEvent } from "react";
import { AxiosResponse, AxiosError } from "axios";
import axios from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Switch } from "@/components/ui/switch";
import { auth } from "@/firebase";

interface FormData {
  name: string;
  image: File | null;
  role: string;
  board_member: string;
  facebook_profile: string;
  instagram_profile: string;
}

const AddTeam = () => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    image: null,
    role: "",
    board_member: "no",
    facebook_profile: "",
    instagram_profile: "",
  });

  const navigate = useNavigate();

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, data saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(null);
    setFormData({
      name: "",
      image: null,
      role: "",
      board_member: "no",
      facebook_profile: "",
      instagram_profile: "",
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
    const file = files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file && file.size > maxSize) {
      toast.warning("File size exceeds 5mb");
      return;
    } else {
      setImagePreview(file);
      setFormData((prevState) => ({ ...prevState, image: file || null }));
    }
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const handleCheckedchange = (value: boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      board_member: value ? "yes" : "no",
    }));
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
    submitData.append("role", formData.role);
    submitData.append("instagram_profile", formData.instagram_profile);
    submitData.append("facebook_profile", formData.facebook_profile);
    submitData.append("board_member", formData.board_member);
    if (formData.image) {
      submitData.append("image", formData.image);
    } else {
      toast.warning("Please upload image");
      return;
    }

    // Submit Data to the Server
    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.post("/team", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${idToken}`,
        },
      });
      if (response.data) {
        toast.success("Team member created successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        navigate("/admin/team");
      }
    } catch (error) {
      toast.error("Error occured while creaing team member");
      setIsSaving(false);
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Member
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Team
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="title"
                placeholder="enter name"
                name="name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="role">Role</Label>
              <Input
                type="text"
                id="title"
                placeholder="enter role"
                name="role"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex gap-4 items-center">
              <Label htmlFor="board_member">Is a Board Member?</Label>
              <Switch
                id="board_member"
                name="board_member"
                onCheckedChange={handleCheckedchange}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="socials">Social Media</Label>
              <div className="flex items-center justify-center ">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={fbLogo} className="w-2 h-4" />
                </div>

                <Input
                  type="text"
                  id="title"
                  placeholder="Enter facebook profile link"
                  name="facebook_profile"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-center ">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={igLogo} className="w-5 h-5" />
                </div>

                <Input
                  type="text"
                  id="title"
                  placeholder="Enter instagram profile link"
                  name="instagram_profile"
                  onChange={handleInputChange}
                />
              </div>
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
                Max File Size: 5 MB (jpg, png)
              </p>
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
export default AddTeam;
