import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  index: string
  eyebrow: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('border-t border-border py-16 md:py-24', className)}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <header className="mb-10 flex items-baseline gap-4 md:mb-14">
          <span className="font-mono text-xs text-accent tabular-nums">
            {index}
          </span>
          <div className="h-px flex-1 translate-y-[-1px] bg-border" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
        </header>
        {title ? (
          <h2 className="mb-8 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
