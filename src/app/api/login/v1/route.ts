'use server';

import { NextResponse } from 'next/server';
import { fetchLogin } from '../../../lib/fetchData';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // รับข้อมูลจาก request body
    const { username } = body; // ดึง username จาก request body

    if (!username) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    const data = await fetchLogin(username); // ส่ง username เข้าไปในฟังก์ชัน fetchLogin
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
