import { NextResponse } from "next/server";
import { ErrorMap } from "@/app/constants/errorMap";
import cloudinary from "@/app/lib/cloudinaryClient";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await getServerSession();

    const imgUrl = await cloudinary.uploader.upload(body?.img, {
      upload_preset: process.env.CLOUDINARY_PRESET,
      folder: user?.user?.email || "",
    });
    return NextResponse.json(imgUrl);
  } catch (error) {
    throw new Error(ErrorMap.uploadImg);
  }
}
