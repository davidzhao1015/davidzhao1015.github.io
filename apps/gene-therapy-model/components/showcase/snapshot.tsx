import { Section } from './section'

const fields = [
  {
    label: 'Domain',
    value: 'HEOR · Health Technology Assessment · Rare disease gene therapy',
  },
  { label: 'Therapeutic area', value: 'Rare neuromuscular disease' },
  {
    label: 'Project type',
    value: 'Cost-effectiveness model enhancement & evidence integration',
  },
  {
    label: 'My role',
    value:
      'HEOR consultant — model development, validation, uncertainty analysis, and stakeholder communication',
  },
  {
    label: 'Key analytical areas',
    value:
      'PSA, DSA, scenario analysis, survival & utility modelling, extrapolation, discounting, validation',
  },
  {
    label: 'Stakeholders',
    value:
      'HEOR/modelling team, project leadership, and client-facing HTA & payer stakeholders',
  },
]

export function Snapshot() {
  return (
    <Section id="snapshot" index="01" eyebrow="Project Snapshot">
      <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {fields.map((f) => (
          <div key={f.label} className="bg-card p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              {f.label}
            </dt>
            <dd className="mt-2 text-pretty leading-relaxed text-foreground">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
