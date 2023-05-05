import { User } from "@prisma/client";
import { create } from "zustand";
import { getLogedInUser } from "../utils/getCurrUser";

type State = {
  user: User | null;
  setUser: () => void;
};

export const useLogedInUser = create<State>((set) => ({
  user: null,
  setUser: async () => {
    const user = await getLogedInUser();
    set((state) => {
      return {
        ...state,
        user,
      };
    });
  },
}));
