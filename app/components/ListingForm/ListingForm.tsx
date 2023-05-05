"use client";

import { useListing } from "@/app/store/ListingStore";
import { FormEventHandler, useState } from "react";
import CategoryStep from "./CategoryStep";
import LocationStep from "./LocationStep";
import InfoStep from "./InfoStep";
import AppModal from "../AppModal/AppModal";
import { GrFormClose } from "react-icons/gr";
import Button from "../Button/Button";
import ImageStep from "./ImageStep";

function ListingForm() {
  const { isOpen, onClose } = useListing();
  const [activStep, setActiveStep] = useState(0);

  const formStep: Record<number, JSX.Element> = {
    0: <CategoryStep />,
    1: <LocationStep />,
    2: <InfoStep />,
    3: <ImageStep />,
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // console.log(values);
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
      <form onSubmit={onSubmit}>
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
            <section className={`p-5 w-full flex gap-2 justify-between mt-6`}>
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
    </section>
  );
}

export default ListingForm;
