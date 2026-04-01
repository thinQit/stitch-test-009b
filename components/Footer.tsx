'use client'

import Link from 'next/link'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface FooterProps {
  name?: string
}

export default function Footer({ name = 'Osteria Notte' }: Partial<FooterProps>) {
  return (
    <AnimatedContent>
      <footer id="contact" className="relative bg-background py-16">
        <div className="absolute top-0 left-0 h-10 w-full bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.35),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6">
          <div className="rounded-xl bg-card/80 p-6">
            <h4 className="font-serif text-lg text-foreground">Hours</h4>
            <p className="mt-3 text-sm text-muted-foreground">Mon–Thu: 5:30pm – 10:00pm</p>
            <p className="text-sm text-muted-foreground">Fri–Sat: 5:30pm – 11:30pm</p>
            <p className="text-sm text-muted-foreground">Sun: 5:00pm – 9:30pm</p>
          </div>
          <div className="rounded-xl bg-card/80 p-6">
            <h4 className="font-serif text-lg text-foreground">Address</h4>
            <p className="mt-3 text-sm text-muted-foreground">214 Via della Luna,</p>
            <p className="text-sm text-muted-foreground">SoHo, New York, NY 10012</p>
          </div>
          <div className="rounded-xl bg-card/80 p-6">
            <h4 className="font-serif text-lg text-foreground">Contact</h4>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="tel:+12125550190" className="block text-muted-foreground hover:text-primary">
                +1 (212) 555-0190
              </Link>
              <Link href="mailto:ciao@osterianotte.com" className="block text-muted-foreground hover:text-primary">
                ciao@osterianotte.com
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">© 2026 {name}. All rights reserved.</p>
      </footer>
    </AnimatedContent>
  )
}
