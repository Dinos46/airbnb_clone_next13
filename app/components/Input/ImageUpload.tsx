"use client";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-Icons/tb";

declare global {
  var cloudinary: any;
}

const ImageUpload = () => {
  const uploadFile = (res: any) => {
    console.log(res.info.secure_url);
  };

  const onError = (err: any) => {
    console.log("ERR", err);
  };

  return (
    <div className="p-4">
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
        onUpload={uploadFile}
        options={{
          maxFiles: 1,
        }}
        onError={onError}
      >
        {({ open }) => {
          return (
            <section className="w-full flex flex-col border-[2px] border-dashed border-neutral-200 min-h-[200px] items-center justify-center">
              <button className="" onClick={() => open?.()}>
                <TbPhotoPlus size={40} />
              </button>
              <h4 className="text-lg font-bold text-neutral-800 mt-2">
                click to upload
              </h4>
            </section>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
