import { Country } from "../hooks/useCountries";

export interface Listing {
  category: Set<string>;
  location: Country | undefined;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
}
