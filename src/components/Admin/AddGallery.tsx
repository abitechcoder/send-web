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

const AddGallery = ({ title }: { title: string }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">{title}</p>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Gallery
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" placeholder="Enter title photo" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cover">Cover Gallery</Label>
            <Input type="text" id="cover" placeholder="Enter title photo" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="photo">Photo</Label>
            <Input type="text" id="title" placeholder="Enter title photo" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="video">Video</Label>
            <Input type="trxt" id="title" placeholder="Enter title photo" />
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
            type="button"
            className="bg-secondary hover:bg-blue-600 text-white w-full"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddGallery;
