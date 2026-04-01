'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

export default function ReservationForm() {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    await fetch('/api/reservations', { method: 'POST', body: formData })
    setLoading(false)
  }

  return (
    <AnimatedContent>
      <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-card/90 p-6">
        <Input name="name" placeholder="Full name" required />
        <Input name="email" type="email" placeholder="Email address" required />
        <div className="grid gap-4 md:grid-cols-3">
          <Input name="date" type="date" required />
          <Input name="time" type="time" required />
          <Input name="partySize" type="number" min={1} max={12} placeholder="Party size" required />
        </div>
        <p className="text-xs text-muted-foreground">
          By reserving, you agree to our 24-hour cancellation policy for tasting menu bookings.
        </p>
        <Button type="submit" disabled={loading} className="w-full bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#3c2f00]">
          {loading ? 'Submitting...' : 'Confirm Reservation'}
        </Button>
      </form>
    </AnimatedContent>
  )
}
