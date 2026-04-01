'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CTAButtonProps {
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  label = 'Reserve',
  variant = 'primary',
  className = '',
}: Partial<CTAButtonProps>) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Button
        className={cn(
          'relative overflow-hidden rounded-lg px-6 py-3 font-medium',
          variant === 'primary'
            ? 'bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#3c2f00]'
            : 'bg-transparent text-primary hover:bg-primary/10',
          className
        )}
      >
        <span className="relative z-10">{label}</span>
        {variant === 'primary' && (
          <span className="absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/30 blur-sm animate-[sheen_2.5s_linear_infinite]" />
        )}
      </Button>
    </motion.div>
  )
}
