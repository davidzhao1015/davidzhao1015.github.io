import { Activity, Dna, LineChart } from 'lucide-react'

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            <Dna className="size-3.5 text-primary" />
            HEOR / HTA
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            <Activity className="size-3.5 text-primary" />
            Rare Neuromuscular Disease
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            <LineChart className="size-3.5 text-primary" />
            Cost-Effectiveness Modelling
          </span>
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Modernizing a Gene Therapy Cost-Effectiveness Model for HTA and Payer
          Decision-Making
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Modernized a gene therapy cost-effectiveness model by integrating
          emerging clinical and real-world evidence, strengthening survival and
          utility assumptions, and implementing structured uncertainty analyses
          to improve the transparency, credibility, and decision usefulness of
          long-term value estimates.
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {[
            { k: 'Role', v: 'HEOR Consultant' },
            { k: 'Engine', v: 'Excel + VBA' },
            { k: 'Timeframe', v: '~1 year' },
            { k: 'Focus', v: 'Uncertainty & Value' },
          ].map((item) => (
            <div key={item.k} className="bg-card p-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {item.k}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-foreground">
                {item.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  )
}
