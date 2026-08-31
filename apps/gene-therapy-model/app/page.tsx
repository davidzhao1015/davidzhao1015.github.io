import { Hero } from '@/components/showcase/hero'
import { Snapshot } from '@/components/showcase/snapshot'
import { DecisionContext } from '@/components/showcase/decision-context'
import { Challenge } from '@/components/showcase/challenge'
import { Solution } from '@/components/showcase/solution'
import { Contribution } from '@/components/showcase/contribution'
import { Impact } from '@/components/showcase/impact'
import { Methods } from '@/components/showcase/methods'
import { Deliverables } from '@/components/showcase/deliverables'
import { Reusability } from '@/components/showcase/reusability'
import { Gallery } from '@/components/showcase/gallery'
import { Lessons } from '@/components/showcase/lessons'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Snapshot />
      <DecisionContext />
      <Challenge />
      <Solution />
      <Contribution />
      <Impact />
      <Methods />
      <Deliverables />
      <Reusability />
      <Gallery />
      <Lessons />
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-3 px-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            HEOR Case Study — Portfolio
          </p>
          <p className="text-sm text-muted-foreground">
            Confidentiality-safe recreation for portfolio use.
          </p>
        </div>
      </footer>
    </main>
  )
}
