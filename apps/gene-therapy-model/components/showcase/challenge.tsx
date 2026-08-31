import { Section } from './section'

export function Challenge() {
  return (
    <Section
      id="challenge"
      index="03"
      eyebrow="Business Challenge"
      title="Short follow-up, decades-long projections"
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Gene therapies create substantial uncertainty for
            cost-effectiveness evaluation because relatively short clinical
            follow-up must often inform projections over decades.
          </p>
          <p>
            The existing model needed to accommodate evolving evidence and
            alternative assumptions around survival, treatment effects,
            treatment initiation, utilities, costs, and time horizon — while
            clearly communicating their implications for cost-effectiveness.
          </p>
          <p>
            A further challenge was ensuring uncertainty analysis was not simply
            added as a technical calculation, but integrated into the model
            architecture in a way that was transparent, reproducible,
            user-friendly, and suitable for HTA-oriented decision making.
          </p>
        </div>

        <figure className="rounded-xl border border-border bg-card p-6">
          <figcaption className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Evidence vs. horizon
          </figcaption>
          <div className="space-y-4">
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-foreground">Clinical follow-up</span>
                <span className="font-mono text-muted-foreground">~years</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-[14%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-foreground">Model time horizon</span>
                <span className="font-mono text-muted-foreground">
                  ~decades
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-full w-full rounded-full bg-accent" />
              </div>
            </div>
          </div>
          <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
            The gap between observed data and projected value is where
            structural assumptions and uncertainty analysis do the heaviest
            lifting.
          </p>
        </figure>
      </div>
    </Section>
  )
}
