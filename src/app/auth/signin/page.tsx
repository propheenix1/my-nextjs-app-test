'use client'

import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
  const { data: session } = useSession()
  const [username, setUsername] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn('credentials', { username, callbackUrl: '/' })
  }

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {session.user?.name}!
        </h1>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="w-64">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}
