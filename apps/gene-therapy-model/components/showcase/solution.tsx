import {
  ArrowRight,
  Database,
  Layers,
  MessageSquareText,
  SlidersHorizontal,
} from 'lucide-react'
import { Section } from './section'

const flow = [
  'Clinical trial + RWE',
  'Survival / Effect / Utility',
  'CE Model',
  'Uncertainty Analysis',
  'HTA & Payer Decision',
]

const pillars = [
  {
    icon: SlidersHorizontal,
    title: 'Structured uncertainty analysis',
    body: 'PSA, DSA, and scenario analysis to characterize parameter and structural uncertainty.',
  },
  {
    icon: Layers,
    title: 'Flexible model architecture',
    body: 'Expanded age- and health-state calculations with user-controlled assumptions across inputs.',
  },
  {
    icon: Database,
    title: 'Evidence integration',
    body: 'Clinical trial, published, and real-world/natural-history evidence built into survival and utility.',
  },
  {
    icon: MessageSquareText,
    title: 'Decision-oriented communication',
    body: 'Interfaces, summaries, visualizations, and documentation that expose the driving assumptions.',
  },
]

export function Solution() {
  return (
    <Section
      id="solution"
      index="04"
      eyebrow="Solution"
      title="A flexible analytical platform, not a single estimate"
    >
      {/* workflow diagram */}
      <div className="mb-12 overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          From emerging evidence to HTA decision
        </p>
        <ol className="flex flex-col gap-3 md:flex-row md:items-stretch">
          {flow.map((step, i) => (
            <li
              key={step}
              className="flex flex-1 items-center gap-3 md:flex-col md:gap-3"
            >
              <div className="flex h-full w-full flex-col justify-center rounded-lg border border-border bg-background px-4 py-3 text-center">
                <span className="font-mono text-[11px] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 text-sm font-medium leading-snug text-foreground">
                  {step}
                </span>
              </div>
              {i < flow.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 shrink-0 rotate-90 text-muted-foreground md:rotate-0"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.title} className="bg-card p-6">
            <p.icon
              aria-hidden="true"
              className="mb-4 size-6 text-primary"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
