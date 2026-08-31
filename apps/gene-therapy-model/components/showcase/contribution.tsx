import { Section } from './section'

const contributions = [
  {
    title: 'Uncertainty frameworks',
    body: 'Designed and implemented PSA, DSA, and scenario analysis with parameter governance, distributions, and automated result generation.',
  },
  {
    title: 'VBA automation',
    body: 'Built VBA-based simulation and automation workflows to run repeated analyses and efficiently capture model outputs.',
  },
  {
    title: 'Survival & extrapolation',
    body: 'Evaluated alternative survival distributions and progression assumptions, and built selectable survival scenarios from competing evidence.',
  },
  {
    title: 'Utility mapping',
    body: 'Investigated translating clinical functional improvements into health-state utilities, including NSAA-related mapping and HTA precedents.',
  },
  {
    title: 'Validation & debugging',
    body: 'Identified and corrected implementation issues affecting age-specific costs, utilities, discounting, and model outputs.',
  },
  {
    title: 'Decision support & communication',
    body: 'Built interfaces, summary tables, visualizations, slides, and documentation to explain methods and recommendations to stakeholders.',
  },
]

export function Contribution() {
  return (
    <Section
      id="contribution"
      index="05"
      eyebrow="My Contribution"
      title="Translating evidence questions into implementable model solutions"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {contributions.map((c, i) => (
          <li
            key={c.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 font-mono text-xs text-primary tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {c.title}
              </h3>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {c.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
