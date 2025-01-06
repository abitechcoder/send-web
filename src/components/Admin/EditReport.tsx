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
import { ReportType } from "@/src/types";
import { auth } from "@/firebase";

interface FormDataType {
  title: string;
  image: File | null | string;
  report: File | null | string;
  report_type: string;
}

const AddReport = ({
  report,
  setSelectedReport,
}: {
  report: ReportType;
  setSelectedReport: any;
}) => {
  const [open, setIsOpen] = useState(false);
  const [saving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [changeReport, setChangeReport] = useState<Boolean>(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormDataType>({
    title: report.title,
    image: report.image_url,
    report: report.report_url,
    report_type: report.report_type,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (report.image_url) {
      setImagePreview(report.image_url);
    }
  }, [report]);

  const handleFormClose = () => {
    if (saving) {
      toast.warning("Please wait, report saving to the database.");
      return;
    }
    setIsOpen(!open);
    setImagePreview(report.image_url);
    setChangeReport(false);
    setFormData({
      title: report.title,
      image: report.image_url,
      report: report.report_url,
      report_type: report.report_type,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    const file: any = files?.[0];
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

  const handleSelect = (value: string) => {
    if (value) {
      setFormData((prevState) => ({ ...prevState, report_type: value }));
    }
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
    if (formData.report) {
      submitData.append("document", formData.report);
    } else {
      toast.warning("Please upload report");
      return;
    }

    submitData.append("title", formData.title);

    if (formData.report_type) {
      submitData.append("report_type", formData.report_type);
    } else {
      toast.warning("Please select report type");
      return;
    }

    if (formData.image) {
      submitData.append("image", formData.image);
    } else {
      toast.warning("Please upload image");
      return;
    }

    console.log("Form Data:", formData);

    // Submit Data to the Server
    try {
      setIsSaving(true);
      const response: AxiosResponse = await axios.put(
        `/reports/${report.id}`,
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      if (response.data) {
        toast.success("Report updated successfully!!!");
        setIsSaving(false);
        setIsOpen(false);
        setSelectedReport(null);
        navigate("/admin/report");
      }
    } catch (error) {
      toast.error("error occurred while updating report");
      setIsSaving(false);
      console.error("Error:", error as AxiosError);
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleFormClose}>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-6 rounded-md text-xs font-semibold font-nunito text-white">
        Edit Report
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-4/5">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Edit Report
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 my-2">
            <div>
              <Label htmlFor="report_type">Report type</Label>
              <Select onValueChange={handleSelect} value={formData.report_type}>
                <SelectTrigger id="report_type" className="w-full">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newsletter">Newsletters</SelectItem>
                  <SelectItem value="annual">Annual Reports</SelectItem>
                  <SelectItem value="manual">Training Manuals</SelectItem>
                  <SelectItem value="strategic_plan">
                    Strategic Documents
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="report">Title Report</Label>
              <Input
                type="text"
                id="title"
                placeholder="Title report"
                name="title"
                onChange={handleInputChange}
                value={formData.title}
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

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="document">Report</Label>
              {report.report_url && !changeReport ? (
                <div className="flex items-center gap-8">
                  <p className="text-xs">{report.title} document</p>
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
              {saving ? "Updating report please wait..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddReport;
