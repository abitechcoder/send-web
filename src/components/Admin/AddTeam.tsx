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

const AddTeam = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">Add Team</p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Team
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="team">Name Team</Label>
            <Input type="text" id="title" placeholder="enter name team" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Input type="text" id="title" placeholder="enter role team" />
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
                placeholder="enter link social media"
              />
            </div>
            <div className="flex items-center justify-center ">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={igLogo} className="w-5 h-5" />
              </div>

              <Input
                type="text"
                id="title"
                placeholder="enter link social media"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cover">Photo</Label>

            <div className="w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col">
              <img src={image} className="w-6 h-6" />
              <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                Drag Photo Here
              </p>
            </div>
            <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
              Max File Size: 5 MB (jpg, pdf, png)
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
            type="button"
            className="bg-secondary hover:bg-blue-600 text-white w-full mb-2 "
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddTeam;
