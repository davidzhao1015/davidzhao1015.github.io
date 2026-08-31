import { Compass } from 'lucide-react'
import { Section } from './section'

export function DecisionContext() {
  return (
    <Section id="decision-context" index="02" eyebrow="Decision Context">
      <div className="relative rounded-xl border border-primary/20 bg-primary/[0.04] p-8 md:p-10">
        <Compass
          aria-hidden="true"
          className="mb-6 size-7 text-primary"
          strokeWidth={1.5}
        />
        <p className="text-balance text-xl font-medium leading-relaxed text-foreground md:text-2xl">
          How should long-term clinical benefits and quality-of-life
          improvements be translated into credible estimates of economic value
          for a gene therapy?
        </p>
        <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
          Decisions spanned how to represent long-term survival and disease
          progression, incorporate emerging clinical and real-world evidence,
          map clinical outcomes to health-state utilities, characterize
          uncertainty, and determine which assumptions belong in the base case
          versus scenario analyses — so outputs could support transparent,
          defensible HTA and payer discussions rather than a single point
          estimate.
        </p>
      </div>
    </Section>
  )
}
