'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check the screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close sidebar on PC
  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false)
    }
  }, [isMobile])

  return (
    <div className='py-4'>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isMobile ? 'md:relative md:translate-x-0' : 'md:hidden'} transition-transform duration-200 ease-in-out z-40`}
      >
        <nav>
          <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            About
          </Link>
          <Link href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            Dashboard
          </Link>
          <Link href="/contact" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            Contact
          </Link>
        </nav>
      </div>

      {/* Content area */}
      <div>
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6 md:justify-between">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" className="text-xl font-bold text-gray-800 flex">
                <Image
                  src="/images/local-9.png"
                  alt="Logo"
                  width={40} // Adjust the width as needed
                  height={40} // Adjust the height as needed
                  className="mr-2"
                />
                  Modern Website
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="sr-only">Open menu</span>
                  {sidebarOpen ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About
                </Link>
                <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Dashboard
                </Link>
                <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
