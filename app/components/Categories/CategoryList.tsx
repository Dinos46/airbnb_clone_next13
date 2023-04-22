"use client";
import CategoryCard from "./CategoryCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useCategory } from "@/app/store/CategoryStore";

const CategoryList = () => {
  const categories = useCategory((state) => state.categories);
  const setSelected = useCategory((state) => state.setSelected);
  const selected = useCategory((state) => state.selected);
  const router = useRouter();
  const queryParams = useSearchParams();

  const selectedLabels = queryParams?.get("category") ?? "";

  const onSelect = (label: string) => {
    setSelected(label);
    const searchQuery = Array.from(selected).join(",");

    const params = new URLSearchParams();
    params.append("category", searchQuery);
    const searchParams =
      searchQuery.length === 0 ? "" : `?${params.toString()}`;
    router.push(`/${searchParams}`);
  };

  return (
    <section className="flex overflow-x-auto justify-between container py-1 px-3">
      {categories?.map(({ Icon, label }, idx) => {
        return (
          <CategoryCard
            key={`${label}-${idx}`}
            Icon={Icon}
            label={label}
            onSelect={onSelect}
            selected={selectedLabels?.includes(label)}
          />
        );
      })}
    </section>
  );
};

export default CategoryList;
