import { NextResponse } from 'next/server';

const posts = [
  {
    id: '1',
    author: 'NovaFox',
    content: 'Best loadout per cashout ranked? Ho trovato questa combo devastante.',
    likes: 128
  }
];

export async function GET() {
  return NextResponse.json({ data: posts });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Post creato', payload: body }, { status: 201 });
}
