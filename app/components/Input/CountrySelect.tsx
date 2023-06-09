"use client";
import { useCountries } from "@/app/hooks/useCountries";
import { useListing } from "@/app/store/ListingStore";
import Image from "next/image";
import Select from "react-select";
import { useFormContext } from "react-hook-form";
import { Listing } from "@/app/Models/ListingModel";

type Props = {};

const CountrySelect = ({}: Props) => {
  const { setValue } = useFormContext<Listing>();

  const { getAllCountries } = useCountries();
  const location = useListing((state) => state.getLocation());

  const onSelect = (val: any) => {
    setValue("location", val);
  };

  return (
    <div>
      <Select
        value={location}
        onChange={onSelect}
        isClearable
        placeholder="Anywhere"
        options={getAllCountries()}
        formatOptionLabel={(data) => {
          return (
            <div className="flex flex-row items-center gap-3">
              <Image
                src={data?.flag || ""}
                width={20}
                height={20}
                alt={`${data?.label} flag`}
              />
              <div>
                {data?.label},
                <span className="text-neutral-800 ml-2">{data?.region}</span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CountrySelect;
