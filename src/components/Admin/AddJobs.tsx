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
import { plus } from "@/src/assets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "@/src/styles";
import { FormEvent, useState, ChangeEvent } from "react";
import { AxiosResponse, AxiosError } from "axios";
import axios from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jobClassification, regions } from "@/src/constants";
import { auth } from "@/firebase";

interface FormData {
  title: string;
  document: File | null;
  description: string;
  deadline: string;
  classification: string;
  region: string;
}

const AddJobs = () => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    document: null,
    deadline: "",
    classification: "",
    region: "",
  });

  const navigate = useNavigate();

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, data saving to the database.");
      return;
    }
    setIsOpen(!open);
    setFormData({
      title: "",
      description: "",
      document: null,
      deadline: "",
      classification: "",
      region: "",
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const file = files?.[0];
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "document" ? file || null : value,
    }));
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
    submitData.append("description", formData.description);
    submitData.append("deadline", formData.deadline);
    if (formData.document) {
      submitData.append("document", formData.document);
    } else {
      toast.warning("Please upload job description document");
      return;
    }

    if (formData.classification !== "0") {
      submitData.append("classification", formData.classification);
    } else {
      toast.warning("Please select job classification");
      return;
    }

    if (formData.region !== "0") {
      submitData.append("region", formData.region);
    } else {
      toast.warning("Please select region");
      return;
    }

    //Submit Data to the Server
    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.post("/job", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${idToken}`,
        },
      });
      if (response.data) {
        toast.success("Job created successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        navigate("/admin/recruitment");
      }
    } catch (error) {
      toast.error("Error occured while creating job");
      setIsSaving(false);
      console.error("Error:", error as AxiosError);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">Add Jobs</p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Jobs
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 my-2">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Job Title</Label>
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
              <Label htmlFor="description">Job Description</Label>
              <textarea
                name="description"
                placeholder="Enter job description"
                id="desctiption"
                onChange={handleTextAreaChange}
                required
                rows={10}
                cols={50}
                className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
              ></textarea>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="document">Job Description Document</Label>
              <Input
                type="file"
                onChange={handleInputChange}
                id="document"
                name="document"
                accept="application/pdf"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="classification">Job Classification</Label>
              <select
                onChange={handleSelectChange}
                className={`${styles.paragraph4} border py-3 px-2 rounded-md text-[#849299]`}
                name="classification"
                id="classification"
              >
                <option value="0">Select Job Classification</option>
                {jobClassification.map((classification) => (
                  <option value={classification.id}>
                    {classification.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="region">Region</Label>
              <select
                onChange={handleSelectChange}
                className={`${styles.paragraph4} border py-3 px-2 rounded-md text-[#849299]`}
                name="region"
                id="region"
              >
                <option>Select Job Region</option>
                {regions.map((region) => (
                  <option value={region.id}>{region.title}</option>
                ))}
              </select>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="deadline">Deadline</Label>
              <div
                className={`${styles.paragraph4}  border-[1px] mt-1 p-2 rounded-md  outline-none text-[#849299] flex items-center justify-between`}
              >
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  onChange={handleInputChange}
                  required
                />
              </div>
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
              {saving ? "Saving please wait..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddJobs;
