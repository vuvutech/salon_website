
'use client'
 
import { useRouter } from 'next/navigation'

import React from 'react'
import BookingForm from '@/components/BookingForm'

const Booking = () => {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/about')}>
      About
    </button>
  )
}

export default Booking