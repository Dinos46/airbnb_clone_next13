"use client";

import CountrySelect from "../Input/CountrySelect";

const LocationInput = () => {
  return (
    <section className="p-5">
      <h2 className="text-center text-neutral-600 font-lg">
        where is your place located?
      </h2>
      <h3 className="text-center text-neutral-400 font-mediums mb-5">
        help guests find you
      </h3>
      <CountrySelect />
    </section>
  );
};

export default LocationInput;
