import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";

export const getLogedInUser = async () => {
  const session = await getServerSession(authOptions);
  console.log({ session });
  return session?.user as User;
};
