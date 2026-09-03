import { CtaBar, PageHero, SectionTitle } from "../components/PageParts";

const locations = [
  ["Arlington", "Tarrant County", "HQ primary dispatch"],
  ["Irving", "Dallas County", "Daily fleet routes"],
  ["Carrollton", "Dallas County", "Rapid dispatch"],
  ["Richardson", "Dallas County", "Same-day service"],
  ["Plano", "Collin County", "Full service fleet"],
  ["Grand Prairie", "Dallas County", "Direct route"],
  ["North Richland Hills", "Tarrant County", "Urgent response"],
  ["Haltom City", "Tarrant County", "Immediate local hub"],
];
const areaDetails = [
  [
    "Residential plumbing",
    "Fixtures, leaks, drains, water heaters, and whole-home upgrades.",
  ],
  [
    "Commercial support",
    "Maintenance plans, restaurant lines, restrooms, and backflow needs.",
  ],
  [
    "Rural systems",
    "Well water fittings, filtration, pressure issues, and pump connections.",
  ],
];

export default function Locations() {
  return (
    <main>
      <PageHero
        eyebrow="Serving your neighborhood"
        title="A local plumber across the communities we call home."
        text="We proudly help homeowners and property owners throughout our service area with reliable, responsive plumbing service and practical repairs."
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Service area"
            title="Coverage that keeps help close by."
            text="Our dispatch team plans routes across the region so scheduled work stays organized and urgent issues can be triaged quickly."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.map(([city, county, badge]) => (
              <article
                className="flex min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
                key={city}
              >
                <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-5">
                  <div>
                    <span className="text-xl text-amber-700">●</span>
                    <h2 className="mt-2 font-serif text-3xl text-slate-900">
                      {city}, TX
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{county}</p>
                  </div>
                  <span className="rounded-lg bg-emerald-50 px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                    {badge}
                  </span>
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-700">
                  Popular services
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Drain cleaning · Leak repair · Water heaters · Pipe work
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <a href="#contact" className="font-bold text-sky-700">
                    Book service →
                  </a>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Dispatch ready
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Built for the region"
            title="Different properties, one dependable standard."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {areaDetails.map(([title, text]) => (
              <div className="rounded-2xl bg-white p-7" key={title}>
                <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[.2em] text-sky-700">
            Not sure we cover your address?
          </p>
          <h2 className="mt-4 font-serif text-5xl text-slate-900">
            Give us a call and we&apos;ll point you in the right direction.
          </h2>
          <a
            href="tel:+16824362800"
            className="mt-8 inline-flex rounded-full bg-sky-700 px-6 py-4 font-bold text-white"
          >
            Call 1 (682) 436-2800
          </a>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
