import { create } from "zustand";

type State = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
};

export const useListing = create<State>((set) => ({
  isOpen: true,
  onClose: () => {
    set({ isOpen: false });
  },
  onOpen: () => {
    set({ isOpen: true });
  },
}));
