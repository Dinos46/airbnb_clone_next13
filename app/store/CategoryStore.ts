import { create, useStore } from "zustand";
import { Category } from "../Models/CategoryModel";
import { categoryMap } from "../constants/categoryMap";

type CategoryStore = {
  categories: Category[];
  selected: Set<string>;
  getCategories: () => Category[];
  setSelected: (ctg: string) => void;
};

export const useCategory = create<CategoryStore>((set, get) => ({
  categories: categoryMap.map((ctg) => ({ ...ctg, isSelected: false })),
  selected: new Set(),
  getCategories: () => get().categories,
  setSelected: (ctg) => {
    set((state) => {
      if (state.selected.has(ctg)) {
        state.selected.delete(ctg);
        return { ...state };
      }
      state.selected.add(ctg);
      return { ...state };
    });
  },
}));
