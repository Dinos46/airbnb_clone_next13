"use client";
import { useCategory } from "@/app/store/CategoryStore";
import { useListing } from "@/app/store/ListingStore";
import Heading from "../Heading/Heading";

type Props = {};

function CategoryStep({}: Props) {
  const categories = useCategory((state) => state.categories);
  const categorySet = useListing((state) => state.getCtgSet());
  const setCategpry = useListing((state) => state.setCategory);

  const onSelectCategory = (id: string) => {
    setCategpry(id);
  };

  return (
    <>
      <Heading
        subTitle="which of these describes your place?"
        subTitleClass="mt-4"
      />
      <section className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 cursor-pointer overflow-x-auto gap-2 ">
        {categories.map((ctg, idx) => {
          return (
            <section
              key={`${ctg.id}-${idx + Date.now()}`}
              className={`flex p-3 rounded-xl items-center gap-2 hover:bg-neutral-100 transition duration-300 ease-in-out 
              ${categorySet.has(ctg.id) ? "border" : ""}`}
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

export default CategoryStep;
