'use client';

import React from 'react';
import Hero from '../components/Hero';
import { fetchUsers } from '../lib/fetchData';
import { withAuth } from '../components/withAuth'; // Adjust the path accordingly

interface Users {
  id: number;
  username: string;
  created_at: string;
}

async function getUsers() {
  const Users = await fetchUsers();
  return Users;
}

async function Page() {
  const Users = await getUsers();

  return (
    <div>
  <Hero />
  <h2 className="sm:text-4xl text-2xl font-bold mb-6">Contact</h2>
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
        {Users.map((users) => (
          <tr key={users.id} className="md:table-row flex flex-col md:flex-row">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              <span className="md:hidden font-bold">ID:</span> {users.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <span className="md:hidden font-bold">Name:</span> {users.username}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <span className="md:hidden font-bold">Description:</span> {users.created_at}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}

export default withAuth(Page)