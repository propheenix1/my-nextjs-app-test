'use server';

import { NextResponse } from 'next/server';
import { getSheetDashboard } from '../../../lib/googleSheet';


export async function GET() {
  try {
    const data = await getSheetDashboard();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
