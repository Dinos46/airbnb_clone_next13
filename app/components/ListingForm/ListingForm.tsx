"use client";

import { Listing } from "@/app/Models/ListingModel";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import AppModal from "../AppModal/AppModal";
import { useListing } from "@/app/store/ListingStore";
import { GrFormClose } from "react-icons/gr";
import { useCategory } from "@/app/store/CategoryStore";
import CategoryInput from "./CategoryInput";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import LocationInput from "./LocationInput";

function ListingForm() {
  const { isOpen, onClose } = useListing();
  const [activStep, setActiveStep] = useState(0);

  const {
    formState: { errors },
    register,
    reset,
    setValue,
    control,
    handleSubmit,
  } = useForm<Listing>({
    defaultValues: {
      category: [],
      bathroomCount: 0,
      description: "",
      guestCount: 0,
      imageSrc: "",
      location: "",
      price: 0,
      roomCount: 0,
      title: "",
    },
  });

  const formStep: Record<number, JSX.Element> = {
    0: <CategoryInput setValue={setValue} />,
    1: <LocationInput />,
    2: <CategoryInput setValue={setValue} />,
    3: <CategoryInput setValue={setValue} />,
  };

  const onSubmit: SubmitHandler<Listing> = (values) => {
    console.log(values);
  };

  const onNext = () => {
    setActiveStep((prev) => {
      if (prev === 6) return prev;
      return prev + 1;
    });
  };

  const onBack = () => {
    setActiveStep((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppModal
          isOpen={isOpen}
          title={
            <section className="flex p-5 shadow-sm items-center justify-center">
              <GrFormClose
                onClick={onClose}
                size={30}
                className="cursor-pointer absolute left-1"
              />
              <h2 className="capitalize text-lg font-bold">
                airDnD your home!
              </h2>
            </section>
          }
          body={formStep[activStep]}
          footer={
            <section className={`p-5 w-full flex gap-2 justify-between`}>
              {activStep !== 0 && (
                <Button
                  type="button"
                  disabled={false}
                  title="back"
                  className="w-2/5 form-regular"
                  onClick={onBack}
                />
              )}
              <Button
                type={activStep < 6 ? "button" : "submit"}
                disabled={false}
                title="next"
                className={`${
                  activStep !== 0 ? "w-2/5" : "w-full"
                } form-submit`}
                onClick={onNext}
              />
            </section>
          }
        />
      </form>
      <DevTool control={control} />
    </section>
  );
}

export default ListingForm;
