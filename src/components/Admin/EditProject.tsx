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
import { Switch } from "@/components/ui/switch";
import { image } from "@/src/assets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Step, Stepper } from "react-form-stepper";
import styles from "@/src/styles";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProgramType, ProjectType } from "@/src/types";
import axios from "../../axios/index";
import { AxiosError, AxiosResponse } from "axios";
import { auth } from "@/firebase";

interface FormDataType {
  name: string;
  description: string;
  donor: string;
  status: string;
  partner: string;
  location: string;
  duration: string;
  budget: string;
  program_area: string;
  report: File | null | string;
  problem_image: File | null | string;
  problem_desc: string;
  solution_desc: string;
  beneficiaries_desc: string;
}

const EditProject = ({
  programs,
  project,
  setSelectedProject,
}: {
  programs: any;
  project: ProjectType;
  setSelectedProject: any;
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [changeReport, setChangeReport] = useState<Boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: project.name,
    description: project.description,
    donor: project.donor,
    status: project.status,
    partner: project.partner,
    location: project.location,
    duration: project.duration,
    budget: project.budget,
    program_area: project.program_area,
    report: project.report,
    problem_image: project.problem_image,
    problem_desc: project.problem_desc,
    solution_desc: project.solution_desc,
    beneficiaries_desc: project.beneficiaries_desc,
  });

  const navigate = useNavigate();

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, report saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(project.problem_image);
    setActiveStep(0);
    setFormData({
      name: project.name,
      description: project.description,
      donor: project.donor,
      status: project.status,
      partner: project.partner,
      location: project.location,
      duration: project.duration,
      budget: project.budget,
      program_area: project.program_area,
      report: project.report,
      problem_image: project.problem_image,
      problem_desc: project.problem_desc,
      solution_desc: project.solution_desc,
      beneficiaries_desc: project.beneficiaries_desc,
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
        [name]: name === "report" ? null : value,
      }));
      return;
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "report" ? file || null : value,
      }));
    }
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, program_area: value }));
    }
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
      setFormData((prevState) => ({
        ...prevState,
        problem_image: file || null,
      }));
    }
  };

  const handleFileSelector = () => {
    imageInputRef.current?.click();
  };

  const handleCheckedchange = (value: boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      status: value ? "completed" : "ongoing",
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

    if (activeStep === 0) {
      if (!formData.program_area) {
        toast.warning("Please select program area");
        return;
      }

      if (!formData.report) {
        toast.warning("Please upload report");
        return;
      }

      setActiveStep(activeStep + 1);
    } else if (activeStep === 1) {
      if (!formData.problem_image) {
        toast.warning("Please upload problem image");
        return;
      }

      setActiveStep(activeStep + 1);
    } else if (activeStep === 2) {
      setActiveStep(activeStep + 1);
    } else {
      submitData.append("name", formData.name);
      submitData.append("description", formData.description);
      submitData.append("donor", formData.donor);
      submitData.append("status", formData.status);
      submitData.append("partner", formData.partner);
      submitData.append("location", formData.location);
      submitData.append("duration", formData.duration);
      submitData.append("budget", formData.budget);
      submitData.append("program_area", formData.program_area);
      if (formData.report) {
        submitData.append("document", formData.report);
      }

      if (formData.problem_image) {
        submitData.append("image", formData.problem_image);
      }

      submitData.append("problem_desc", formData.problem_desc);

      submitData.append("solution_desc", formData.solution_desc);

      submitData.append("beneficiaries_desc", formData.beneficiaries_desc);

      // Submit Data to the Server
      try {
        setIsSaving(true);

        const response: AxiosResponse = await axios.put(
          `/projects/${project.id}`,
          submitData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${idToken}`,
            },
          }
        );

        if (response.data) {
          toast.success("Project updated successfully!!!");
          setIsSaving(false);
          setIsOpen(false);
          setImagePreview(null);
          setActiveStep(0);
          setSelectedProject(null);
          navigate("/admin/program");
        }
      } catch (error) {
        toast.error("error occurred while updating project");
        setIsSaving(false);
        console.error("Error:", error as AxiosError);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="px-4 py-2 font-bold text-sm border flex-1 bg-blue-700 rounded-lg text-white">
        Edit Project
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-3/4">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Edit Project
          </DialogTitle>
          <DialogDescription className="text-center">
            Update project information.
          </DialogDescription>
        </DialogHeader>

        <Stepper activeStep={activeStep}>
          <Step label="Project Info" onClick={() => setActiveStep(0)} />
          <Step label="Problem" onClick={() => setActiveStep(1)} />
          <Step label="Solution" onClick={() => setActiveStep(2)} />
          <Step label="Beneficiaries" onClick={() => setActiveStep(3)} />
        </Stepper>

        <form onSubmit={handleSubmit}>
          {activeStep === 0 ? (
            <div className="grid gap-4 my-2">
              <div>
                <Label htmlFor="program_area">Program Area</Label>
                <Select
                  onValueChange={handleSelect}
                  value={formData.program_area}
                >
                  <SelectTrigger id="program_area" className="w-full">
                    <SelectValue placeholder="Select program area" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs?.map((program: ProgramType) => (
                      <SelectItem key={program.id} value={program.title}>
                        {program.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="enter project name"
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="description">Project Description</Label>
                <textarea
                  name="description"
                  placeholder="enter project description"
                  required
                  rows={5}
                  cols={50}
                  onChange={handleTextAreaChange}
                  value={formData.description}
                  className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
                ></textarea>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="donor">Donor</Label>
                <Input
                  type="text"
                  id="donor"
                  name="donor"
                  placeholder="enter project donor"
                  onChange={handleInputChange}
                  value={formData.donor}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="status">Status</Label>
                <Switch
                  id="status"
                  name="status"
                  onCheckedChange={handleCheckedchange}
                  checked={formData.status === "completed" ? true : false}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="partner">Partner</Label>
                <Input
                  type="text"
                  id="partner"
                  name="partner"
                  placeholder="enter project partner"
                  onChange={handleInputChange}
                  value={formData.partner}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="location">Location</Label>
                <Input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="enter project location"
                  onChange={handleInputChange}
                  value={formData.location}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  type="text"
                  id="duration"
                  name="duration"
                  placeholder="enter project duration"
                  onChange={handleInputChange}
                  value={formData.duration}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="enter project budget"
                  onChange={handleInputChange}
                  value={formData.budget}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="document">Report</Label>
                {project.report && !changeReport ? (
                  <div className="flex items-center gap-8">
                    <p className="text-xs">document uploaded</p>
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
                      name="report"
                      type="file"
                      accept="application/pdf"
                      onChange={handleInputChange}
                    />
                    <p
                      className={`${styles.paragraph4} text-xs text-[#1B43C6]`}
                    >
                      Max File Size: 20 MB (pdf)
                    </p>
                  </div>
                )}
              </div>
              {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="document">Report</Label>
                <Input
                  id="document"
                  name="report"
                  type="file"
                  accept="application/pdf"
                  onChange={handleInputChange}
                />
                <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
                  Max File Size: 20 MB (pdf)
                </p>
              </div> */}
            </div>
          ) : activeStep === 1 ? (
            <div className="grid gap-4">
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
                <Label htmlFor="problem_desc">Problem</Label>
                <textarea
                  id="problem_desc"
                  name="problem_desc"
                  placeholder="enter problem description"
                  required
                  rows={5}
                  cols={50}
                  onChange={handleTextAreaChange}
                  value={formData.problem_desc}
                  className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
                ></textarea>
              </div>
            </div>
          ) : activeStep === 2 ? (
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="solution_desc">Solution</Label>
                <textarea
                  id="solution_desc"
                  name="solution_desc"
                  placeholder="enter solution description"
                  required
                  rows={5}
                  cols={50}
                  onChange={handleTextAreaChange}
                  value={formData.solution_desc}
                  className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
                ></textarea>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="beneficiaries_desc">Beneficiaries</Label>
                <textarea
                  id="beneficiaries_desc"
                  name="beneficiaries_desc"
                  placeholder="enter beneficiaries description"
                  required
                  rows={5}
                  cols={50}
                  onChange={handleTextAreaChange}
                  value={formData.beneficiaries_desc}
                  className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
                ></textarea>
              </div>
            </div>
          )}

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
              {saving ? "Updating please wait..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProject;
