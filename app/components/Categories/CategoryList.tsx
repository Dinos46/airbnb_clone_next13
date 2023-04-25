"use client";
import CategoryCard from "./CategoryCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCategory } from "@/app/store/CategoryStore";
import { useEffect } from "react";

const CategoryList = () => {
  const categories = useCategory((state) => state.categories);
  const setSelected = useCategory((state) => state.setSelected);
  const selected = useCategory((state) => state.selected);
  const getAllCategories = useCategory((state) => state.getAllCategories);
  const router = useRouter();
  const queryParams = useSearchParams();
  const pathName = usePathname();
  const selectedLabels = queryParams?.get("category") ?? "";

  useEffect(() => {
    getAllCategories();
  }, []);

  const onSelect = (label: string) => {
    setSelected(label);
    const searchQuery = Array.from(selected).join(",");

    const params = new URLSearchParams();
    params.append("category", searchQuery);
    const searchParams =
      searchQuery.length === 0 ? "" : `?${params.toString()}`;
    router.push(`/${searchParams}`);
  };

  if (pathName !== "/") return null;

  return (
    <section className="flex overflow-x-auto justify-between container py-1 px-3">
      {categories?.map(({ label, Icon, id }) => {
        return (
          <CategoryCard
            key={id}
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
