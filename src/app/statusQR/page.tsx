import React from 'react';
import Hero from '../components/Hero';
import { fetchDetails } from '../lib/fetchData';

interface Detail {
  id: number;
  detail: string;
  created_at: string;
}

async function getDetails() {
  const details = await fetchDetails();
  return details;
}

export default async function Page() {
  const details = await getDetails();

  return (
    <div>
  <Hero />
  <h2 className="sm:text-4xl text-2xl font-bold mb-6">Details</h2>
  <hr />
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr className="hidden md:table-row">
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {details.map((detail) => (
          <tr key={detail.id} className="md:table-row flex flex-col md:flex-row">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              <span className="md:hidden font-bold">ID:</span> {detail.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <span className="md:hidden font-bold">Name:</span> {detail.detail}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <span className="md:hidden font-bold">Description:</span> {detail.created_at}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
