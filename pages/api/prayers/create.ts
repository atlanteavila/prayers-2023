import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, text, userId } = req.body;
  const prayer = await prisma.prayers.create({
    data: {
      title, text, userId
    },
  });
  res.status(200).json(prayer);
}