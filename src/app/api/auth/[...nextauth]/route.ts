import NextAuth from 'next-auth';
import { authOptions } from '../../../lib/authOptions'; // ตรวจสอบให้แน่ใจว่าเส้นทางตรง

// ใช้ NextAuth handler กับตัวเลือกที่กำหนดไว้
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
