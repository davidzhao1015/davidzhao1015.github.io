import { Recycle } from 'lucide-react'
import { Section } from './section'

const components = [
  'PSA framework',
  'DSA framework',
  'Scenario-analysis architecture',
  'Parameter-governance template',
  'Survival evidence comparison workflow',
  'Model-validation workflow',
  'User-interface principles',
]

export function Reusability() {
  return (
    <Section id="reusability" index="09" eyebrow="Reusability">
      <div className="rounded-xl border border-accent/30 bg-accent/[0.06] p-8 md:p-10">
        <div className="flex items-start gap-4">
          <Recycle
            aria-hidden="true"
            className="mt-0.5 size-6 shrink-0 text-accent-foreground"
            strokeWidth={1.5}
          />
          <p className="text-pretty leading-relaxed text-foreground">
            Several components form a reusable foundation for future HEOR
            models — reducing the effort to build more transparent and
            maintainable Excel-based economic models, and letting new evidence
            slot in without rewriting core calculations.
          </p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-accent/20 pt-6">
          {components.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
