import { create } from "zustand";
import { Listing } from "../Models/ListingModel";
import { Country } from "../hooks/useCountries";

type State = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  listing: Listing;
  getCtgSet: () => Listing["category"];
  getLocation: () => Listing["location"];
  setCategory: (id: string) => void;
  setLocation: (location: Country) => void;
  setCount: (
    type: keyof Pick<Listing, "bathroomCount" | "guestCount" | "roomCount">,
    action: "inc" | "dec"
  ) => void;
  addImgSrc: (img: string) => void;
  resetListing: () => void;
};

const setInitialState = () => {
  return {
    category: new Set<string>(),
    bathroomCount: 1,
    description: "",
    guestCount: 1,
    imageSrc: "",
    location: undefined,
    price: 0,
    roomCount: 1,
    title: "",
  };
};

export const useListing = create<State>((set, get) => ({
  isOpen: false,
  onClose: () => {
    set({ isOpen: false });
  },
  onOpen: () => {
    set({ isOpen: true });
  },
  listing: setInitialState(),

  setLocation: (location) => {
    set((state) => ({
      ...state,
      listing: {
        ...state.listing,
        location,
      },
    }));
  },
  getLocation: () => get().listing.location,
  getCtgSet: () => get().listing.category,
  setCategory: (id) => {
    set((state) => {
      if (state.listing.category.has(id)) {
        state.listing.category.delete(id);
        return { ...state };
      }
      state.listing.category.add(id);
      return {
        ...state,
      };
    });
  },
  setCount: (type, action) => {
    if (action === "dec") {
      set((state) => {
        if (state.listing[type] < 2) return state;
        return {
          ...state,
          listing: {
            ...state.listing,
            [type]: state.listing[type] - 1,
          },
        };
      });
    } else {
      set((state) => {
        return {
          ...state,
          listing: {
            ...state.listing,
            [type]: state.listing[type] + 1,
          },
        };
      });
    }
  },
  addImgSrc: (img) => {
    set((state) => {
      return {
        ...state,
        listing: {
          ...state.listing,
          imageSrc: img,
        },
      };
    });
  },
  resetListing: () => {
    set((prev) => {
      return {
        ...prev,
        listing: setInitialState(),
      };
    });
  },
}));
