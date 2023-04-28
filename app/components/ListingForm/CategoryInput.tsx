"use client";
import { Listing } from "@/app/Models/ListingModel";
import { useCategory } from "@/app/store/CategoryStore";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

type Props = {
  setValue: UseFormSetValue<Listing>;
};

function CategoryInput({ setValue }: Props) {
  const categories = useCategory((state) => state.categories);
  const [ctgSet, setCtgSet] = useState<Set<string>>(new Set());

  const onSelectCategory = (id: string) => {
    setCtgSet((prev) => {
      prev.add(id);
      return prev;
    });

    setValue("category", Array.from(ctgSet));
  };

  return (
    <>
      <h3 className=" text-center p-2 text-neutral-400 font-medium">
        which of these describes your place?
      </h3>
      <section className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 cursor-pointer overflow-x-auto gap-2 ">
        {categories.map((ctg, idx) => {
          return (
            <section
              key={`${ctg.id}-${idx + Date.now()}`}
              className="flex p-3 rounded-xl items-center gap-2 hover:bg-neutral-100 transition duration-300 ease-in-out"
              onClick={() => onSelectCategory(ctg.id)}
            >
              <ctg.Icon />
              <span>{ctg.label}</span>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default CategoryInput;
