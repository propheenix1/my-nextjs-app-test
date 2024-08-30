'use server';

import { NextResponse } from 'next/server';
import { getSheetAbout } from '../../../lib/googleSheet';

export async function GET() {
  try {
    const data = await getSheetAbout();
    console.log('Successful fetching data:', { status: 200 }); // Move this before return
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
