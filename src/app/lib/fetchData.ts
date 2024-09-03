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

    console.log('Fetch data Successful');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // คืนค่าเป็นอาเรย์ว่างหากเกิดข้อผิดพลาด
  }
}

export async function fetchUsers() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*');
  
    if (error) {
      throw error;
    }
  
    console.log('Fetch data Successful');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export async function fetchDashboard() {
  try {
    const { data, error } = await supabase
      .from('dashboard')
      .select('*');
  
    if (error) {
      throw error;
    }
  
    console.log('Fetch data Successful');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export async function fetchContact() {
  try {
    const { data, error } = await supabase
      .from('contact')
      .select('*');
  
    if (error) {
      throw error;
    }
  
    console.log('Fetch data Successful');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// POST: Fetch user login details based on username
export async function fetchLogin(username: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username) // ใช้ username ที่ส่งมาเป็นพารามิเตอร์
      .single();
      
    if (error) {
      throw error;
    }

    console.log('Fetch data Successful');
    return data;
  } catch (error) {
    console.error('Error fetching user login:', error);
    return null; // คืนค่าเป็น null หากเกิดข้อผิดพลาด
  }
}
