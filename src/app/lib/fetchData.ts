// lib/fetchData.ts

import { supabase } from '../lib/supabaseClient'; // ตรวจสอบเส้นทางให้ถูกต้อง

export async function fetchDetails() {
  try {
    const { data, error } = await supabase
      .from('detail') // ชื่อตารางของคุณ
      .select('*');

    if (error) {
      throw error; // ขว้างข้อผิดพลาดเพื่อจัดการ
    }

    console.log('Fetch data Successful'); // ใช้ console.log สำหรับการดีบัก
    return data;
  } catch (error) {
    console.error('Error fetching data:', error); // ข้อความผิดพลาดเพื่อช่วยดีบัก
    return []; // คืนค่าเป็นอาเรย์ว่างหากเกิดข้อผิดพลาด
  }
}

export async function fetchUsers() {
    try {
      const { data, error } = await supabase
        .from('users') // ชื่อตารางของคุณ
        .select('*');
  
      if (error) {
        throw error; // ขว้างข้อผิดพลาดเพื่อจัดการ
      }
  
      console.log('Fetch data Successful'); // ใช้ console.log สำหรับการดีบัก
      return data;
    } catch (error) {
      console.error('Error fetching data:', error); // ข้อความผิดพลาดเพื่อช่วยดีบัก
      return []; // คืนค่าเป็นอาเรย์ว่างหากเกิดข้อผิดพลาด
    }
  }
  export async function fetchDashboard() {
    try {
      const { data, error } = await supabase
        .from('dashboard') // ชื่อตารางของคุณ
        .select('*');
  
      if (error) {
        throw error; // ขว้างข้อผิดพลาดเพื่อจัดการ
      }
  
      console.log('Fetch data Successful'); // ใช้ console.log สำหรับการดีบัก
      return data;
    } catch (error) {
      console.error('Error fetching data:', error); // ข้อความผิดพลาดเพื่อช่วยดีบัก
      return []; // คืนค่าเป็นอาเรย์ว่างหากเกิดข้อผิดพลาด
    }
  }
  export async function fetchContact() {
    try {
      const { data, error } = await supabase
        .from('contact') // ชื่อตารางของคุณ
        .select('*');
  
      if (error) {
        throw error; // ขว้างข้อผิดพลาดเพื่อจัดการ
      }
  
      console.log('Fetch data Successful'); // ใช้ console.log สำหรับการดีบัก
      return data;
    } catch (error) {
      console.error('Error fetching data:', error); // ข้อความผิดพลาดเพื่อช่วยดีบัก
      return []; // คืนค่าเป็นอาเรย์ว่างหากเกิดข้อผิดพลาด
    }
  }