'use client'

import { AnimatedContent } from '@/components/ui/effects/animated-content'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children?: ReactNode
  containerWidth?: string
  sectionSpacing?: string
  alternate?: boolean
  className?: string
}

export default function Section({
  id = '',
  children,
  containerWidth = 'max-w-7xl',
  sectionSpacing = 'py-20 md:py-28',
  alternate = false,
  className = '',
}: Partial<SectionProps>) {
  return (
    <section id={id} className={cn(sectionSpacing, alternate ? 'bg-card/30' : 'bg-background', className)}>
      <AnimatedContent>
        <div className={cn('mx-auto px-4 md:px-6', containerWidth)}>{children}</div>
      </AnimatedContent>
    </section>
  )
}
