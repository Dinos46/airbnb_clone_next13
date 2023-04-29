"use client";

import Heading from "../Heading/Heading";
import ImageUpload from "../Input/ImageUpload";

const ImageStep = () => {
  return (
    <div>
      <Heading
        mainTitle="add photos of your place"
        subTitle="show guests how your place looks like"
      />
      <ImageUpload />
    </div>
  );
};

export default ImageStep;
