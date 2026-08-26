import { CtaBar, SectionTitle } from "../components/PageParts";

import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import gallery1 from "../assets/waterline.jpg";
import gallery2 from "../assets/extra1.jpg";
import gallery3 from "../assets/systemupgrades.jpg";
import water from "../assets/waterhome.jpg";
const services = [
  [
    "Drain cleaning",
    service1,
    "Clear stubborn clogs and restore healthy flow.",
  ],
  [
    "Leak repair",
    service2,
    "Find hidden leaks before they become costly damage.",
  ],
  [
    "Water line repair",
    service3,
    "Restore pressure with precise pipe diagnostics.",
  ],
];
const reasons = [
  [
    "01",
    "Plain-language advice",
    "We explain what is happening, what it will take to fix it, and which options make sense for your home.",
  ],
  [
    "02",
    "Respect for your space",
    "Our technicians work cleanly, protect surrounding finishes, and leave the area ready for normal life.",
  ],
  [
    "03",
    "Repairs built to last",
    "We focus on root causes and durable materials instead of temporary patches that create repeat calls.",
  ],
];
const testimonials = [
  "They arrived quickly, explained the problem clearly, and fixed our main drain without pressure.",
  "The team was careful, professional, and kept us updated through our whole-house repipe.",
  "A dependable local crew. Our water heater issue was diagnosed and solved in one visit.",
];
const locations = [
  ["Keystone Heights", "Clay / Bradford / Putnam Hub", "Rapid dispatch"],
  ["Gainesville", "Alachua County", "Daily fleet routes"],
  ["Middleburg", "Clay County", "Full service fleet"],
];
const gallery = [
  [gallery1, "Drain cleaning", "Restoring flow where your home needs it most."],
  [gallery2, "Leak diagnosis", "Finding the source before water damage spreads."],
  [gallery3, "Water line work", "Improving pressure with careful pipe service."],
];

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[.22em] text-sky-700">
              Trusted DFW plumbing specialists
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[.98] text-slate-950 sm:text-7xl">
              Expert plumbing solutions{" "}
              <span className="text-amber-700">done right</span> the first time.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              From stubborn clogs and hidden leaks to sewer problems and aging
              pipe replacement, we deliver dependable plumbing care built for
              real homes and busy families.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+16824362800"
                className="rounded-full bg-sky-700 px-6 py-4 font-bold text-white shadow-xl shadow-sky-700/20"
              >
                Call now: 1 (682) 436-2800
              </a>
              <a
                href="#contact"
                className="rounded-full border border-amber-600/40 bg-amber-50 px-6 py-4 font-bold text-slate-900"
              >
                Request service
              </a>
            </div>
            <div className="mt-10 flex gap-10">
              <div>
                <strong className="block text-3xl text-amber-700">15+</strong>
                <span className="text-xs uppercase tracking-wider text-slate-500">
                  Years local service
                </span>
              </div>
              <div>
                <strong className="block text-3xl text-amber-700">24/7</strong>
                <span className="text-xs uppercase tracking-wider text-slate-500">
                  After-hours text support
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={water}
              alt="Professional plumbing work"
              className="h-[480px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-5 shadow-xl">
              <span className="block text-xs font-bold uppercase tracking-wider text-sky-700">
                Licensed
              </span>
              <strong className="text-xl text-slate-900">&amp; insured</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <strong className="text-4xl text-amber-400">6+</strong>
            <p className="mt-2 text-sm text-slate-400">Core services</p>
          </div>
          <div>
            <strong className="text-4xl text-amber-400">12+</strong>
            <p className="mt-2 text-sm text-slate-400">Cities served</p>
          </div>
          <div>
            <strong className="text-4xl text-amber-400">24/7</strong>
            <p className="mt-2 text-sm text-slate-400">Emergency text line</p>
          </div>
          <div>
            <strong className="text-4xl text-amber-400">100%</strong>
            <p className="mt-2 text-sm text-slate-400">
              Focused on lasting repairs
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="The right help, at the right time"
            title="Small warning signs deserve serious attention."
            text="A slow drain, an unexplained water bill, or inconsistent hot water can signal a bigger issue. Early diagnosis protects your home and your budget."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([name, image, text]) => (
              <article
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
                key={name}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Professional service
                  </p>
                  <h3 className="mt-3 font-serif text-3xl text-slate-900">
                    {name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  <a
                    href="#services"
                    className="mt-5 inline-block font-bold text-sky-700"
                  >
                    Explore service →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why homeowners choose us"
            title="Clear communication. Real solutions."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map(([number, title, text]) => (
              <div
                className="rounded-2xl border border-slate-200 bg-white p-7"
                key={number}
              >
                <span className="text-3xl font-black text-amber-700">
                  {number}
                </span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="How we work"
            title="A simple process from first call to final check."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Listen and inspect",
              "Explain your options",
              "Repair and verify",
            ].map((title, i) => (
              <div className="border-l-4 border-amber-600 pl-6" key={title}>
                <span className="text-sm font-black text-sky-700">
                  STEP 0{i + 1}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  We take the time to understand the issue, give you a clear
                  path forward, and check our work before we leave.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sky-50 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Customer feedback"
            title="Trusted by homeowners across DFW."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((quote, i) => (
              <blockquote
                className="rounded-2xl bg-white p-7 shadow-lg shadow-sky-900/5"
                key={quote}
              >
                <div className="text-amber-500">★★★★★</div>
                <p className="mt-5 leading-8 text-slate-600">“{quote}”</p>
                <footer className="mt-6 font-bold text-slate-900">
                  {["Michael R.", "Alicia T.", "Daniel H."][i]}{" "}
                  <span className="font-normal text-slate-500">
                    · DFW homeowner
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="Nearby when you need us" title="Local service, planned around your community." text="Our crews serve homeowners and businesses across the region with organized routes and responsive dispatch." />
            <a href="#locations" className="mb-10 shrink-0 rounded-full border border-sky-700 px-5 py-3 font-bold text-sky-700">See all locations →</a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {locations.map(([city, county, badge]) => <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5" key={city}><div className="flex items-start justify-between gap-3"><div><span className="text-amber-700">●</span><h3 className="mt-2 font-serif text-3xl text-slate-900">{city}</h3><p className="mt-1 text-sm text-slate-500">{county}</p></div><span className="rounded-lg bg-emerald-50 px-2 py-2 text-[10px] font-bold uppercase tracking-wider text-emerald-800">{badge}</span></div><p className="mt-6 border-t border-slate-200 pt-5 leading-7 text-slate-600">Drain cleaning · Leak repair · Water heaters · Pipe work</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="A look at our work" title="The details matter, from diagnosis to finish." text="Explore a few examples of the systems and repairs our team handles every day." />
            <a href="#gallery" className="mb-10 shrink-0 rounded-full border border-sky-700 px-5 py-3 font-bold text-sky-700">View full gallery →</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map(([image, title, text]) => <article className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5" key={title}><img src={image} alt={title} className="h-56 w-full object-cover" /><div className="p-6"><h3 className="font-serif text-2xl text-slate-900">{title}</h3><p className="mt-2 leading-7 text-slate-600">{text}</p></div></article>)}
          </div>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
