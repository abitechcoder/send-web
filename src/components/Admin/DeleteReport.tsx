import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteReport } from "@/src/data";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ReportType } from "@/src/types";

function DeleteReport({
  reportId,
  handleSelectedReport,
}: {
  reportId: number;
  handleSelectedReport: React.Dispatch<React.SetStateAction<null | ReportType>>;
}) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteReport(reportId);
      handleSelectedReport(null);
      toast.success("Report deleted successfully!!!");
      navigate("/admin/report");
    } catch (error) {
      toast.error("Error occurred while deleting report");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-4 py-2 text-sm border border-blue-700 rounded-lg text-blue-700">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-secondary">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteReport;
