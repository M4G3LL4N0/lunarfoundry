import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { ResourceNodeMap } from "@/components/lunarfoundry/ResourceNodeMap";
import { DEFAULT_RESOURCE_NODES } from "@/lib/types";

const massProblem = [
  {
    title: "Every kilogram from Earth is expensive",
    body: "Launch and landing margins dominate lunar programs. If construction and propellant precursors ride uphill, timelines stretch and architectures shrink.",
  },
  {
    title: "Lunar construction needs local inputs",
    body: "Aggregate, glassy phases, metals, and oxygen have to come from regolith—or you are building a logistics chain, not a surface economy.",
  },
  {
    title: "Power limits shape industry",
    body: "Night survival, thermal swings, and process duty cycles set the real ceiling on tons per year—not slide-deck optimism.",
  },
  {
    title: "Resource uncertainty blocks planning",
    body: "Programs stall when teams cannot agree on yield envelopes, equipment mass, or what “pilot scale” actually implies for the grid.",
  },
  {
    title: "Mission teams need phased infrastructure",
    body: "Survey, pilot extraction, refining, storage, and export each carry different interfaces. Skip a phase and the next one fails in integration.",
  },
];

const materials = [
  ["Oxygen", "Propellant / life-support precursor from regolith and polar volatile access patterns."],
  ["Silicon", "PV and electronics feedstock—linked to beneficiation and melt discipline."],
  ["Aluminum", "Structural metal from anorthite-rich routes; ties to electrolysis and thermal budgets."],
  ["Iron", "Reduction from ilmenite and oxide phases; anchor for tooling and magnetic beneficiation."],
  ["Glass feedstock", "Agglutinate-driven glass for in-situ casting and binder pathways."],
  ["Construction aggregate", "Sintered regolith and graded fill for roads, berms, and robotic construction lanes."],
];

const roadmap = [
  ["Survey", "Orbital + surface truth for chemistry, thermal environment, and logistics corridors."],
  ["Pilot extraction", "Throughput-prove the feed system and dust isolation at reduced duty."],
  ["Refining unit", "Product qualification against habitat and fabrication contamination budgets."],
  ["Storage", "Buffer tanks, silos, and thermal mass for night and peak shaving."],
  ["Construction feedstock", "Packaging glass and aggregate for robotics and surface assembly."],
  ["Scaled foundry", "Continuous production with maintenance loops sized for uncrewed intervals."],
];

const personas = [
  "Lunar mission planners",
  "Space agencies",
  "Commercial lunar companies",
  "Habitat builders",
  "Construction robotics firms",
];

const whyNow = [
  "Artemis-class cadence and polar surface priorities",
  "Commercial lunar payload manifests maturing",
  "ISRU and regolith science closing the gap on oxide chemistry",
  "Launch cost curves enabling heavier pilot landed mass",
  "Robotics and teleoperations proven in terrestrial analogs",
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-zinc-900" data-reveal>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.12),transparent)]" />
        <div data-stagger className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600/90">Lunar industrial infrastructure</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Build industry from lunar material.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
              LunarFoundry models the extraction, refining, power, and infrastructure plans needed to turn regolith into usable off-world supply—before you
              freeze mass to orbit.
            </p>
            <div data-stagger className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_rgba(217,119,6,0.25)]">
                Simulate a lunar foundry
              </Link>
              <Link href="/dashboard" className="rounded-full border border-zinc-600 bg-zinc-950/60 px-6 py-3 text-sm font-medium text-zinc-200">
                View industrial dashboard
              </Link>
            </div>
          </div>
          <div className="relative z-10">
            <ResourceNodeMap nodes={DEFAULT_RESOURCE_NODES} className="shadow-2xl shadow-black/50" />
            <p className="mt-3 text-center text-xs text-zinc-600">Extraction nodes · oxygen, silicon, aluminum, iron, glass, regolith feedstock</p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">The launch mass problem</h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500">
            The Moon cannot become infrastructure if every kilogram comes from Earth. These are the constraints mission teams hit first.
          </p>
          <div data-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {massProblem.map((c) => (
              <div key={c.title} className="motion-card motion-hover-lift rounded-2xl border border-zinc-800/90 bg-zinc-950/50 p-5">
                <h3 className="text-sm font-semibold text-zinc-100">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-50">Lunar resource infrastructure simulator</h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-500">
                Model how much oxygen, metal, or glass a lunar site can produce before you design the mission around it. Select region, material, power
                architecture, extraction route, landed mass, duration, and objective—get yield, power, phases, economics, and risk in one pass.
              </p>
            </div>
            <Link href="/demo" className="text-sm font-semibold text-amber-500 hover:text-amber-400">
              Open full demo →
            </Link>
          </div>
          <div className="motion-card motion-hover-lift mt-10 rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4 ring-1 ring-zinc-800/80">
            <p className="mb-4 text-center text-xs uppercase tracking-widest text-zinc-600">Product preview · run live on /demo</p>
            <ResourceNodeMap nodes={DEFAULT_RESOURCE_NODES} className="max-h-[280px]" />
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Material systems</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {materials.map(([title, body]) => (
              <div key={title} className="border-l-2 border-amber-700/60 pl-4">
                <h3 className="font-semibold text-zinc-100">{title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Industrial roadmap</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roadmap.map(([title, body], i) => (
              <li key={title} className="motion-card motion-hover-lift relative rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5">
                <span className="font-mono text-xs text-amber-700/90">{(i + 1).toString().padStart(2, "0")}</span>
                <h3 className="mt-2 font-semibold text-zinc-100">{title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Industrial mission dashboard</h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500">
            Resource yield forecast, power demand, equipment mass context, processing timeline, launch mass avoided, risk matrix, site suitability, phased
            infrastructure, material output cards, and mission economics—aligned to how lunar programs actually review trades.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Oxygen yield (sample envelope)", "Review in the demo"],
              ["Power demand (sample envelope)", "Tied to your inputs"],
              ["Launch mass avoided (sample)", "Planning aid only"],
              ["Feasibility score (sample)", "Not a flight rating"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
                <p className="text-xs text-zinc-500">{k}</p>
                <p className="mt-1 font-semibold text-zinc-100">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/dashboard" className="inline-flex rounded-full border border-amber-800/50 bg-amber-950/20 px-5 py-2.5 text-sm font-semibold text-amber-200">
              Open dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Who uses LunarFoundry</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {personas.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Why now</h2>
          <ul className="mt-8 space-y-3 text-sm text-zinc-400">
            {whyNow.map((w) => (
              <li key={w} className="flex gap-2">
                <span className="text-amber-600">▸</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-900 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">Mission planning & partnerships</h2>
          <p className="mt-2 text-sm text-zinc-500">Non-SaaS engagement models for serious lunar programs.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              ["Feasibility Study", "Region down-select, yield envelopes, power + landed mass sanity checks."],
              ["Mission Planning", "Integrated phases, risk matrix, and economics aligned to your launch cadence."],
              ["Pilot Foundry Program", "Pilot extraction + refining interface specs with robotics partners."],
              ["Strategic Infrastructure Partner", "Multi-year planning office, data room, and joint roadmaps to scale."],
            ].map(([t, b]) => (
              <div key={t} className="motion-card motion-hover-lift rounded-2xl border border-zinc-800 bg-zinc-950/50 p-6">
                <h3 className="font-semibold text-zinc-100">{t}</h3>
                <p className="mt-2 text-sm text-zinc-500">{b}</p>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="mt-8 inline-block text-sm font-semibold text-amber-500 hover:text-amber-400">
            View pricing detail →
          </Link>
        </div>
      </section>

      <section className="border-b border-zinc-900 bg-zinc-950/40 py-16 sm:py-20" data-reveal>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-zinc-50">FAQ</h2>
          <dl className="mt-8 space-y-6">
            {[
              [
                "Is this flight software or a qualification tool?",
                "No. LunarFoundry is a planning and communication layer—parametric envelopes for trades, not a substitute for hardware test or mission assurance.",
              ],
              [
                "Do you call external APIs?",
                "No paid APIs. The simulator runs entirely in your session and on your saved plans in the bundled database.",
              ],
              [
                "Can we export assumptions?",
                "Save missions from the demo to the dashboard; each plan stores inputs and outputs as JSON for your program data room.",
              ],
            ].map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold text-zinc-200">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-500">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20" data-reveal>
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-900/30 bg-gradient-to-br from-zinc-950 to-zinc-900 px-6 py-14 text-center sm:px-10">
          <h2 className="text-2xl font-semibold text-zinc-50">Turn regolith assumptions into infrastructure plans.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500">
            Run the simulator, save missions to your dashboard, and bring a single artifact into your next program review.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/demo" className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-zinc-950">
              Simulate a lunar foundry
            </Link>
            <Link href="/contact" className="rounded-full border border-zinc-600 px-6 py-3 text-sm text-zinc-200">
              Lunar infrastructure inquiry
            </Link>
          </div>
        </div>
      </section>

      <ProductHonestyNote status="demo" />
    </div>
  );
}
