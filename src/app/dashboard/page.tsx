'use client';

import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero'
import { withAuth } from '../components/withAuth'; // Adjust the path accordingly

interface DashboardItem {
  header: number;
  content: string;
  detail: string;
  footer: string;
  img: string;
}

function Page() {
  const [dashboardData, setDashboardData] = useState<DashboardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/dashboard/v3');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { data } = await response.json();
        setDashboardData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
  <Hero />
  <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
  <div className="container mx-auto p-4">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Header
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Content
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Detail
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Footer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Img
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dashboardData.map((item) => (
            <tr key={item.header}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.header}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">{item.content}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.detail}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.footer}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img src={`/images/${item.img}`} className="w-16 h-16 object-cover" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default withAuth(Page)