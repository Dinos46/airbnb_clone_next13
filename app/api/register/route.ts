import { hash } from "bcrypt";
import prisma from "../../lib/prismaClient";
import { IUserForm } from "@/app/Models/UserModel";
import { NextResponse } from "next/server";
import { ErrorMap } from "@/app/constants/errorMap";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as IUserForm;
    const hasPassword = await hash(body.password, 12);

    const user = await prisma?.user.create({
      data: {
        email: body.email,
        name: body.username,
        password: hasPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    throw new Error(ErrorMap.invalid);
  }
}
