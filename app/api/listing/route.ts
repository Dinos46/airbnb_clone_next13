import { NextResponse } from "next/server";
import { ErrorMap } from "@/app/constants/errorMap";
import { getServerSession } from "next-auth";
import prisma from "../../lib/prismaClient";
import { Listing } from "@/app/Models/ListingModel";
// import { Listing } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await getServerSession();
    if (!body.location) return;
    const { flag, label, latlng, region, value } = body.location;

    const res = await prisma?.listing.create({
      data: {
        bathroomCount: body.bathroomCount,
        description: body.description,
        guestCount: body.guestCount,
        imageSrc: body.imageSrc,
        price: +Number(body.price).toFixed(2),
        roomCount: body.roomCount,
        title: body.title,
        location: {
          create: {
            flag,
            label,
            region,
            value,
            latlng: `${latlng}`,
          },
        },
        category: {
          connect: body.category.map((ctgId: string) => {
            return {
              id: ctgId,
            };
          }),
        },
      },
      include: {
        category: true,
      },
    });
    console.log({ res });
    return NextResponse.json("OK!");
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.uploadImg);
  }
}
