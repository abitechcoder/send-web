import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const SelectInput = ({ title }: { title: string }) => {
  return (
    <Select>
      <SelectTrigger className="w-full h-full focus:ring-none">
        <SelectValue placeholder={title} className="text-lightgrey" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
