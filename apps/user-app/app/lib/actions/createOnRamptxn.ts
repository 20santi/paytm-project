"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export const createOnRamptxn = async (amount: number, provider: string) => {
  const session = await getServerSession(authOptions);
  const token = (Math.random() * 1000).toString();
  const userId = session.user.id;
  if (!userId) {
    return {
      message: "User is not logged in",
    };
  }

  await prisma.onRampTransaction.create({
    data: {
      status: "Processing",
      token: token,
      amount: amount,
      provider,
      startTime: new Date(),
      userId: Number(userId),
    },
  });

  return {
    message: "On ramp transaction added",
  };
};
