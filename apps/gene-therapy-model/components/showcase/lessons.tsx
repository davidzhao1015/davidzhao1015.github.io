import { Section } from './section'

const lessons = [
  {
    n: 'A',
    title: 'Build uncertainty into the architecture',
    body: 'Designing PSA, DSA, and scenario analysis alongside parameter governance makes a model easier to update, validate, and defend.',
  },
  {
    n: 'B',
    title: 'Structure drives long-term value',
    body: 'For gene therapies, survival extrapolation, effect duration, horizon, and utilities can move results as much as any single parameter.',
  },
  {
    n: 'C',
    title: 'Evidence needs an analytical bridge',
    body: 'Clinical or real-world signals must be justified against survival, progression, utilities, and costs before they become economic evidence.',
  },
]

export function Lessons() {
  return (
    <Section id="lessons" index="11" eyebrow="Key Lessons">
      <div className="grid gap-4 md:grid-cols-3">
        {lessons.map((l) => (
          <article
            key={l.n}
            className="flex flex-col rounded-xl border border-border bg-card p-6"
          >
            <span className="mb-4 flex size-9 items-center justify-center rounded-lg bg-foreground font-mono text-sm text-background">
              {l.n}
            </span>
            <h3 className="text-base font-semibold leading-snug text-foreground">
              {l.title}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {l.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-10 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
        The analyst-to-consultant transition happened at the recommendation
        layer — the highest-value work was not implementing assumptions, but
        judging which were defensible for the base case, which belonged in
        scenarios, and where uncertainty should stay explicit.
      </p>
    </Section>
  )
}
