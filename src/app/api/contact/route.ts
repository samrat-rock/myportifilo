import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();
  console.log('New contact message:', message);
  return NextResponse.json({ success: true });
}
