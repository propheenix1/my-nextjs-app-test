'use client';
import React from 'react'
import Hero from '../components/Hero'
import { withAuth } from '../components/withAuth'; // Adjust the path accordingly

function Page() {
  return (
    <div>
        <Hero />
      About
    </div>
  )
}
export default withAuth(Page)
