import { NextResponse } from 'next/server';

const leaderboard = [
  { position: 1, nickname: 'Yavira', score: 2140, kd: 3.2, season: 'S5' },
  { position: 2, nickname: 'NovaFox', score: 2088, kd: 2.9, season: 'S5' },
  { position: 3, nickname: 'PulseX', score: 2024, kd: 2.7, season: 'S5' }
];

export async function GET() {
  return NextResponse.json({ data: leaderboard });
}
