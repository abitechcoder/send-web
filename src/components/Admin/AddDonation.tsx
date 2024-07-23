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
import { image, plus } from "@/src/assets";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "@/src/styles";

const AddDonation = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Donation
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Donation
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" placeholder="enter title blog" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="amount">Amount Goals</Label>
            <div
              className={`${styles.paragraph4}  border-[1px]  p-2 rounded-md  outline-none text-[#849299] flex items-center gap-3 `}
              contentEditable="true"
            >
              <p className="text-black ">$</p>
              <p>enter amount goal</p>
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Job Description</Label>
            <textarea
              name="message"
              placeholder="enter job description"
              required
              rows={10}
              cols={50}
              className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
            ></textarea>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="challenges">Challenges & Goal</Label>
            <textarea
              name="message"
              placeholder="enter description"
              required
              rows={10}
              cols={50}
              className={`${styles.paragraph4} p-4  border-[1px] mt-1 rounded-xl  outline-none  `}
            ></textarea>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="amount">Custom Amount</Label>
            <Input type="text" id="title" placeholder="enter custom amount" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="payment">Payment Type</Label>
            <select
              className={`${styles.paragraph4} border py-3 px-2 rounded-md text-[#849299]`}
            >
              <option>Select Work type</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
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

export default AddDonation;
