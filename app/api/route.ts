import { prisma } from "@/lib/prisma"
import { randomUUID } from 'crypto';
import { log } from "console"
import { NextResponse } from "next/server";

export const revalidate = 60

export async function GET(req: Request) {

log("mateus santos") 
const email = `${randomUUID()}@gmail.com`
  const createUser = await prisma.user.create({
    data: {
      email: email,
      name: "Mateus",
    }
  })

  const users = await prisma.user.findMany()  

  return Response.json(users)
}



export async function POST(req: Request) {
  const { name, email } = await req.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}