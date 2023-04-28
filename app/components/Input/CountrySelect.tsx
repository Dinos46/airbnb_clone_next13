"use client";
import { useCountries } from "@/app/hooks/useCountries";
import Image from "next/image";
import Select from "react-select";

const CountrySelect = () => {
  const { getAllCountries } = useCountries();
  return (
    <div>
      <Select
        isClearable
        placeholder="Anywhere"
        options={getAllCountries()}
        formatOptionLabel={(data) => {
          return (
            <div className="flex flex-row items-center gap-3">
              {/* <Image src={data.flag} width={10} height={10} alt="" /> */}
              <img src={data.flag} width={20} alt="" />
              <div>
                {data.label},
                <span className="text-neutral-800 ml-2">{data.region}</span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CountrySelect;
