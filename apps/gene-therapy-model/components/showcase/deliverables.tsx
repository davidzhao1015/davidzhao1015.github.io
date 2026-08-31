import {
  BarChart3,
  FileSpreadsheet,
  GitBranch,
  Presentation,
  Settings2,
  ShieldCheck,
} from 'lucide-react'
import { Section } from './section'

const deliverables = [
  { icon: FileSpreadsheet, label: 'Enhanced Excel cost-effectiveness model' },
  { icon: Settings2, label: 'VBA-powered PSA simulation framework' },
  { icon: BarChart3, label: 'Automated DSA and tornado-chart workflow' },
  { icon: GitBranch, label: 'Scenario & survival-source analysis architecture' },
  { icon: ShieldCheck, label: 'Model validation checks and corrected workflows' },
  { icon: Presentation, label: 'Stakeholder decks, interface, and documentation' },
]

export function Deliverables() {
  return (
    <Section id="deliverables" index="08" eyebrow="Deliverables">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((d) => (
          <li
            key={d.label}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <d.icon
                aria-hidden="true"
                className="size-5 text-primary"
                strokeWidth={1.5}
              />
            </span>
            <span className="text-sm font-medium leading-snug text-foreground">
              {d.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
