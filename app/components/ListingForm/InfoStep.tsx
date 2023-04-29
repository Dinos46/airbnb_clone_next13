import { useListing } from "@/app/store/ListingStore";
import ListingCounter from "./ListingCounter";
import { Listing } from "@/app/Models/ListingModel";

const InfoStep = () => {
  const bathroomCount = useListing((state) => state.listing.bathroomCount);
  const guestCount = useListing((state) => state.listing.guestCount);
  const roomCount = useListing((state) => state.listing.roomCount);
  const setCount = useListing((state) => state.setCount);

  const handleChange = (
    action: "inc" | "dec",
    type: keyof Pick<Listing, "bathroomCount" | "guestCount" | "roomCount">
  ) => {
    setCount(type, action);
  };

  return (
    <div className="p-4 flex flex-col gap-5">
      <ListingCounter
        main="guests"
        secondary="how many guests do you allow?"
        value={guestCount}
        onClick={handleChange}
        type="guestCount"
      />
      <hr />
      <ListingCounter
        main="bathrooms"
        secondary="how many bathrooms do you have?"
        value={bathroomCount}
        onClick={handleChange}
        type="bathroomCount"
      />
      <hr />
      <ListingCounter
        main="rooms"
        secondary="how many rooms do you have?"
        value={roomCount}
        onClick={handleChange}
        type="roomCount"
      />
    </div>
  );
};

export default InfoStep;
