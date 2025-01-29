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
    },
    include: {
      posts: true 
    }
  })

  const users = await prisma.user.findMany()  
  const formatUser =  users.map(({password, ...rest}) => rest)

  return Response.json(formatUser)
}


export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password
    },
  });

  const { password: remove, ...userWithoutPassword } = newUser;

  return NextResponse.json(userWithoutPassword, { status: 201 });
}