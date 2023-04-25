import { create, useStore } from "zustand";
// import { CategoryMap } from "../Models/CategoryModel";
import { categoryMap } from "../constants/categoryMap";
import { Category } from "prisma/prisma-client";
import { getAllCategories } from "../services/categoryService";
import { IconType } from "react-icons";

type CategoryData = Omit<Category, "icon">;
type CTG = CategoryData & { Icon: IconType };

type CategoryStore = {
  categories: CTG[];
  selected: Set<string>;
  getCategories: () => CTG[];
  setSelected: (ctg: string) => void;
  getAllCategories: () => void;
};

export const useCategory = create<CategoryStore>((set, get) => ({
  categories: [],
  selected: new Set(),
  getAllCategories: async () => {
    try {
      const { data } = await getAllCategories();

      set((state) => ({
        ...state,
        categories: data.map((ctg) => ({
          description: ctg.description,
          Icon: categoryMap[ctg.icon],
          label: ctg.label,
          id: ctg.id,
        })),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  getCategories: () => get().categories,
  setSelected: (ctg) => {
    set((state) => {
      if (state.selected.has(ctg)) {
        state.selected.delete(ctg);
        return state;
      }
      state.selected.add(ctg);
      return state;
    });
  },
}));
