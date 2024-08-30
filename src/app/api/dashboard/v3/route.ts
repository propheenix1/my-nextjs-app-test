'use server';

import { NextResponse } from 'next/server';
import { fetchDashboard } from '../../../lib/fetchData';

export async function GET() {
  try {
    const data = await fetchDashboard();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
