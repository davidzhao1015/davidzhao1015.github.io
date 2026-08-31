import { CheckCircle2, Gauge, Repeat, ShieldCheck } from 'lucide-react'
import { Section } from './section'

const impacts = [
  {
    icon: ShieldCheck,
    title: 'More credible estimates',
    body: 'Explicitly characterized parameter and structural uncertainty rather than relying on a single point estimate.',
  },
  {
    icon: Gauge,
    title: 'Testable assumptions',
    body: 'Let stakeholders see how survival, treatment effects, utilities, and horizon shift the value proposition.',
  },
  {
    icon: Repeat,
    title: 'Less manual work',
    body: 'VBA automation and reusable sensitivity workflows reduced repetitive analytical effort.',
  },
  {
    icon: CheckCircle2,
    title: 'Higher confidence',
    body: 'Systematic validation surfaced and corrected implementation issues across the model.',
  },
]

export function Impact() {
  return (
    <Section id="impact" index="06" eyebrow="Business Impact">
      <p className="mb-10 max-w-3xl text-balance text-xl font-medium leading-relaxed text-foreground md:text-2xl">
        The work strengthened the model as a decision-support and HTA evidence
        platform — not simply another set of cost-effectiveness estimates.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {impacts.map((m) => (
          <div
            key={m.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <m.icon
              aria-hidden="true"
              className="mb-4 size-6 text-accent"
              strokeWidth={1.5}
            />
            <h3 className="text-sm font-semibold text-foreground">{m.title}</h3>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              {m.body}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        The result is a more flexible architecture that can absorb future
        clinical or real-world data and support clearer communication of
        uncertainty and long-term value to payers and HTA bodies.
      </p>
    </Section>
  )
}
