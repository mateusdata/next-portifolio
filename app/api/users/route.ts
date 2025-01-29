import { randomUUID } from 'crypto';

export const revalidate = 60
 
export async function GET(req: Request) {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
 
  return Response.json(posts)
}
let users: { id: string, name: string, email: string }[] = [];

export async function POST(req: Request) {
  const { name, email } = await req.json();
  const newUser = { id: randomUUID(), name, email };
  users.push(newUser);
  return Response.json(newUser, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, name, email } = await req.json();
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }
  users[userIndex] = { id, name, email };
  return Response.json(users[userIndex]);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }
  const deletedUser = users.splice(userIndex, 1);
  return Response.json(deletedUser[0]);
}