import { Section } from './section'

const groups = [
  {
    category: 'HEOR & economic modelling',
    items: [
      'Cost-effectiveness analysis',
      'Partitioned survival modelling',
      'Long-term extrapolation',
      'Discounted costs & QALYs',
    ],
  },
  {
    category: 'Uncertainty & sensitivity',
    items: [
      'PSA',
      'DSA',
      'Scenario analysis',
      'Parameter distributions',
      'CE plane & CEAC outputs',
    ],
  },
  {
    category: 'Survival & evidence',
    items: [
      'Survival distribution evaluation',
      'Alternative survival sources',
      'Treatment-effect assumptions',
      'Data digitization',
      'RWE integration',
    ],
  },
  {
    category: 'Health utilities',
    items: [
      'Health-state utility modelling',
      'Outcome–utility mapping',
      'NSAA-adjusted scenarios',
      'HTA precedent review',
    ],
  },
  {
    category: 'Programming & implementation',
    items: [
      'Microsoft Excel',
      'VBA',
      'Automated simulation',
      'Model interfaces & dashboards',
      'Parameter governance',
      'Data visualization',
    ],
  },
]

export function Methods() {
  return (
    <Section id="methods" index="07" eyebrow="Methods & Technologies">
      <div className="space-y-8">
        {groups.map((g) => (
          <div
            key={g.category}
            className="grid gap-4 md:grid-cols-[220px_1fr] md:items-baseline"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
              {g.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
