"use client";
import { http } from "@/app/services/apiService";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { TbPhotoPlus } from "react-Icons/tb";
import { BsCheckLg } from "react-Icons/bs";
import { BiUndo } from "react-icons/bi";
import { useListing } from "@/app/store/ListingStore";
import { Listing } from "@/app/Models/ListingModel";
import { useFormContext } from "react-hook-form";

const ImageUpload = ({ className }: { className?: string }) => {
  const { setValue, watch } = useFormContext<Listing>();

  const [img, setImg] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addImgSrc = useListing((state) => state.addImgSrc);

  const uploadFile = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files?.length) return;
    const formData = new FormData();
    formData.append("file", target.files[0]);
    const fileReader = new FileReader();
    fileReader.onload = (ev: ProgressEvent<FileReader>) => {
      http
        .post("/listingImg", { img: ev.target?.result })
        .then(({ data }) => {
          if ("secure_url" in data) {
            setValue("imageSrc", data.secure_url);
          }
        })
        .catch(console.log);
      setImg(ev.target?.result as string);
    };
    fileReader.readAsDataURL(target.files[0]);
  };

  const onConfirm = () => {
    addImgSrc(img);
  };

  const onRetake = () => {
    setImg("");
    if (!inputRef?.current?.value) return;
    inputRef.current.value = "";
  };

  return (
    <div className={` ${className}`}>
      <section className="w-full relative flex flex-col border-[2px] border-dashed border-neutral-200 p-2 min-h-full items-center justify-center">
        {img ? (
          <div className=" w-full absolute top-0  bottom-0 left-0 right-0 h-72 aspect-auto object-contain">
            <Image src={img as string} alt="" fill />
            <div className="bg-black/50 absolute bottom-0 left-0 right-0 top-150 p-2 flex justify-between">
              <button className="text-white" onClick={onConfirm}>
                <BsCheckLg size={18} />
              </button>
              <button className="text-white" onClick={onRetake}>
                <BiUndo size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="h-52 flex flex-col items-center justify-center">
            <label htmlFor="img-upload">
              <TbPhotoPlus size={30} />
            </label>

            <h4 className="text-base font-semibold text-neutral-800 ">
              click to upload
            </h4>
          </div>
        )}
        <input
          type="file"
          id="img-upload"
          hidden
          onChange={uploadFile}
          ref={inputRef}
        />
      </section>
    </div>
  );
};

export default ImageUpload;
