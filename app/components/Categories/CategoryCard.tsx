"use client";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  label: string;
  selected: boolean;
  onSelect: (label: string) => void;
};

const CategoryCard = ({ Icon, label, onSelect, selected }: Props) => {
  return (
    <div
      className={`flex flex-col   items-center hover:text-neutral-500 cursor-pointer transition ${
        selected ? "text-gray-400" : "text-gray-600"
      }`}
      onClick={() => onSelect(label)}
    >
      <Icon size={30} />
      <p className="capitalize  font-nunito font-bold text-sm mt-1">{label}</p>
    </div>
  );
};

export default CategoryCard;
