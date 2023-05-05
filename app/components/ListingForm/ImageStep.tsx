"use client";

import Heading from "../Heading/Heading";
import ImageUpload from "../Input/ImageUpload";

const ImageStep = () => {
  return (
    <div className="h-[20rem] p-4">
      <Heading
        mainTitle="add photos of your place"
        subTitle="show guests how your place looks like"
      />
      <section className="grid grid-listing-img w-full h-full gap-2">
        <ImageUpload className="grid-listing-main" />
        <ImageUpload className="grid-listing-img1" />
        <ImageUpload className="grid-listing-img2" />
        <ImageUpload className=" grid-listing-img3" />
        <ImageUpload className="grid-listing-img4" />
      </section>
    </div>
  );
};

export default ImageStep;
