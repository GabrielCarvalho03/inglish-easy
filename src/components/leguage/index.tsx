import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import i18next from "i18next";

export const Leguage = () => {
  const handleChangeLeguage = (leguage: string) => {
    i18next.changeLanguage(leguage);
  };

  return (
    <Select defaultValue="en" onValueChange={handleChangeLeguage}>
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">pt</SelectItem>
        <SelectItem value="en">en</SelectItem>
      </SelectContent>
    </Select>
  );
};
