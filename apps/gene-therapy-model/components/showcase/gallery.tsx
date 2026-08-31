import { Lock } from 'lucide-react'
import { Section } from './section'

function FigureCard({
  tag,
  title,
  caption,
  children,
  wide,
}: {
  tag: string
  title: string
  caption: string
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <figure
      className={`flex flex-col overflow-hidden rounded-xl border border-border bg-card ${
        wide ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
          {tag}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Anonymized
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background/60 p-6">
        {children}
      </div>
      <figcaption className="border-t border-border px-5 py-4">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {caption}
        </p>
      </figcaption>
    </figure>
  )
}

/* ---- Figure 1: Uncertainty dashboard (tornado + CE plane + CEAC) ---- */
function DashboardFigure() {
  const tornado = [
    { w: 46 },
    { w: 38 },
    { w: 30 },
    { w: 22 },
    { w: 14 },
  ]
  return (
    <div className="grid w-full max-w-md gap-4 sm:grid-cols-2">
      {/* Tornado */}
      <svg viewBox="0 0 120 96" className="w-full" role="img" aria-label="Tornado diagram of parameter influence">
        <line x1="60" y1="6" x2="60" y2="90" className="stroke-border" strokeWidth="1" />
        {tornado.map((b, i) => (
          <g key={i}>
            <rect x={60 - b.w} y={10 + i * 16} width={b.w} height="10" rx="1" className="fill-primary/70" />
            <rect x={60} y={10 + i * 16} width={b.w * 0.7} height="10" rx="1" className="fill-accent/70" />
          </g>
        ))}
      </svg>
      {/* CE plane */}
      <svg viewBox="0 0 120 96" className="w-full" role="img" aria-label="Cost-effectiveness plane scatter">
        <line x1="10" y1="48" x2="110" y2="48" className="stroke-border" strokeWidth="1" />
        <line x1="60" y1="8" x2="60" y2="88" className="stroke-border" strokeWidth="1" />
        <line x1="30" y1="88" x2="104" y2="12" className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="3 3" />
        {[
          [74, 34], [80, 30], [70, 40], [86, 26], [78, 38],
          [90, 22], [66, 44], [82, 32], [76, 28], [72, 36],
          [88, 30], [68, 42],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.4" className="fill-chart-2/60" />
        ))}
      </svg>
      {/* CEAC */}
      <svg viewBox="0 0 120 96" className="w-full" role="img" aria-label="Cost-effectiveness acceptability curve">
        <line x1="12" y1="86" x2="112" y2="86" className="stroke-border" strokeWidth="1" />
        <line x1="12" y1="10" x2="12" y2="86" className="stroke-border" strokeWidth="1" />
        <path d="M12 82 C 40 80, 52 30, 74 22 S 104 14, 112 13" fill="none" className="stroke-primary" strokeWidth="2" />
      </svg>
      {/* Scenario bars */}
      <svg viewBox="0 0 120 96" className="w-full" role="img" aria-label="Scenario comparison bars">
        <line x1="12" y1="86" x2="112" y2="86" className="stroke-border" strokeWidth="1" />
        {[40, 58, 30, 68, 48].map((h, i) => (
          <rect key={i} x={18 + i * 19} y={86 - h} width="12" height={h} rx="1" className={i % 2 ? 'fill-accent/70' : 'fill-primary/70'} />
        ))}
      </svg>
    </div>
  )
}

/* ---- Figure 2: Long-term survival scenario comparison ---- */
function SurvivalFigure() {
  return (
    <svg viewBox="0 0 260 150" className="w-full max-w-md" role="img" aria-label="Survival scenario comparison curves">
      <line x1="28" y1="16" x2="28" y2="126" className="stroke-border" strokeWidth="1" />
      <line x1="28" y1="126" x2="244" y2="126" className="stroke-border" strokeWidth="1" />
      {[40, 70, 100].map((y) => (
        <line key={y} x1="28" y1={y} x2="244" y2={y} className="stroke-border/50" strokeWidth="0.5" strokeDasharray="2 3" />
      ))}
      {/* base case */}
      <path d="M28 22 C 90 26, 140 58, 190 92 S 232 120, 244 124" fill="none" className="stroke-primary" strokeWidth="2.5" />
      {/* optimistic alt */}
      <path d="M28 22 C 100 24, 160 40, 210 66 S 240 96, 244 106" fill="none" className="stroke-accent" strokeWidth="2" strokeDasharray="5 4" />
      {/* conservative alt */}
      <path d="M28 22 C 80 34, 120 80, 160 108 S 210 128, 244 130" fill="none" className="stroke-chart-4" strokeWidth="1.5" strokeDasharray="2 4" />
    </svg>
  )
}

/* ---- Figure 3: Model architecture / parameter governance ---- */
function ArchitectureFigure() {
  const nodes = ['Assumptions', 'Calculations', 'Outcomes', 'Sensitivity', 'Decision support']
  return (
    <svg viewBox="0 0 260 150" className="w-full max-w-md" role="img" aria-label="Model architecture flow">
      {nodes.map((n, i) => {
        const y = 12 + i * 27
        return (
          <g key={n}>
            <rect x="60" y={y} width="140" height="20" rx="4" className="fill-card stroke-border" strokeWidth="1" />
            <text x="130" y={y + 13.5} textAnchor="middle" className="fill-foreground" style={{ fontSize: 9, fontFamily: 'var(--font-sans)' }}>
              {n}
            </text>
            {i < nodes.length - 1 ? (
              <line x1="130" y1={y + 20} x2="130" y2={y + 27} className="stroke-primary" strokeWidth="1.5" markerEnd="url(#arrow)" />
            ) : null}
          </g>
        )
      })}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" className="fill-primary" />
        </marker>
      </defs>
      {/* governance side rail */}
      <rect x="212" y="12" width="40" height="101" rx="4" className="fill-accent/10 stroke-accent/30" strokeWidth="1" />
      <text x="232" y="66" textAnchor="middle" transform="rotate(90 232 66)" className="fill-accent-foreground" style={{ fontSize: 8, fontFamily: 'var(--font-mono)' }}>
        Parameter governance
      </text>
    </svg>
  )
}

export function Gallery() {
  return (
    <Section id="gallery" index="10" eyebrow="Project Gallery">
      <p className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="size-4" aria-hidden="true" />
        Recreated, confidentiality-safe visuals — no product names, client
        identifiers, or proprietary values.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <FigureCard
          tag="Fig. 01"
          title="Uncertainty-analysis dashboard"
          caption="Tornado diagram, cost-effectiveness plane, CEAC, and scenario comparison in one anonymized view."
        >
          <DashboardFigure />
        </FigureCard>
        <FigureCard
          tag="Fig. 02"
          title="Long-term survival scenario comparison"
          caption="How alternative survival evidence and extrapolation assumptions propagate into long-term outcomes."
        >
          <SurvivalFigure />
        </FigureCard>
        <FigureCard
          tag="Fig. 03"
          title="Model architecture & parameter governance"
          caption="User-defined assumptions flow through calculations to outcomes, sensitivity analyses, and decision support."
          wide
        >
          <ArchitectureFigure />
        </FigureCard>
      </div>
    </Section>
  )
}
