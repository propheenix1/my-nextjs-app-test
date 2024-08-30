'use server';

import { google, sheets_v4 } from 'googleapis';
import { JWT } from 'google-auth-library';

// Initialize Google Sheets API client
const sheets = google.sheets('v4');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') as string,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Define the type for the returned data
type SheetData = string[][];

// Function to get data from the 'about' sheet
export async function getSheetAbout(): Promise<SheetData> {
  const client = await auth.getClient() as JWT;  // Cast to JWT
  const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: client });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'about', // Adjust the range as needed
  });

  const values = res.data.values || [];
  return values.slice(1); // Exclude the header row
}

// Function to get data from the 'dashboard' sheet
export async function getSheetDashboard(): Promise<SheetData> {
  const client = await auth.getClient() as JWT;  // Cast to JWT
  const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: client });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'dashboard', // Adjust the range as needed
  });

  const values = res.data.values || [];
  return values.slice(1); // Exclude the header row
}

// Function to get data from the 'contact' sheet
export async function getSheetContact(): Promise<SheetData> {
  const client = await auth.getClient() as JWT;  // Cast to JWT
  const sheets: sheets_v4.Sheets = google.sheets({ version: 'v4', auth: client });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'contact', // Adjust the range as needed
  });

  const values = res.data.values || [];
  return values.slice(1); // Exclude the header row
}
