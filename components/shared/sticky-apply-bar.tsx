'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { stickyBar } from '@/lib/content'

export function StickyApplyBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      href={stickyBar.href}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-gold px-4 py-3.5 text-sm font-semibold text-navy transition-all duration-500 ease-luxe md:text-base',
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0',
      )}
    >
      <span className="text-balance text-center">{stickyBar.label}</span>
      <ArrowRight className="size-4 shrink-0" />
    </Link>
  )
}
