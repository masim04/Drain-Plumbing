import { CtaBar, PageHero, SectionTitle } from "../components/PageParts";

const values = [
  [
    "Craft",
    "We use sound methods, careful measurements, and materials suited to the actual system.",
  ],
  [
    "Integrity",
    "We tell you what we found, what matters now, and what can reasonably wait.",
  ],
  [
    "Care",
    "We remember that every repair happens in someone's home, business, or daily routine.",
  ],
];
const credentials = [
  "Florida Master Plumber (CFC #1428901)",
  "Fully bonded and insured",
  "Commercial kitchen and health code certified",
  "Backflow prevention assembly certified",
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About our company"
        title="Built on trust, master craftsmanship, and integrity."
        text="We help homeowners, businesses, and restaurant owners solve real plumbing issues with practical repairs, dependable support, and quality workmanship that stands the test of time."
      />
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionTitle
              eyebrow="Our approach"
              title="Plumbing is more than fixing pipes. It protects health, safety, and comfort."
            />
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Drain &amp; Plumbing Services was established with a
                customer-first mission: make professional plumbing support
                easier to understand and easier to trust.
              </p>
              <p>
                Our technicians diagnose the root cause, explain the repair in
                plain language, and complete the work with respect for your
                property. Whether the call is for a small fixture issue or a
                major pipe upgrade, the goal stays the same: a solution that
                works and makes sense.
              </p>
              <p>
                We serve people who want a dependable local partner, not a
                rushed transaction.
              </p>
            </div>
            <div className="mt-8 border-l-4 border-amber-600 bg-amber-50 p-7">
              <h3 className="font-serif text-2xl text-slate-900">
                The 100% satisfaction pledge
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We believe in doing the job right the first time. If you are not
                satisfied with our workmanship, we will work to make it right.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-sky-900 p-8 text-white shadow-xl">
              <h2 className="font-serif text-3xl">License &amp; credentials</h2>
              <ul className="mt-7 space-y-4">
                {credentials.map((item) => (
                  <li className="flex gap-3 leading-7 text-sky-100" key={item}>
                    <span className="text-amber-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8">
              <h2 className="font-serif text-3xl text-slate-900">
                Operating headquarters
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Keystone Heights, Florida
                <br />
                24/7 emergency dispatch active every day
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What sets us apart"
            title="A homeowner-first mindset in every visit."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {values.map(([title, text], i) => (
              <article className="rounded-2xl bg-white p-7" key={title}>
                <span className="text-3xl font-black text-amber-700">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.2em] text-sky-700">
            Our promise
          </p>
          <h2 className="mt-4 font-serif text-5xl text-slate-900">
            Good work should leave you feeling informed, not overwhelmed.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            That is why we keep our recommendations honest, our workmanship
            careful, and our communication direct from the first call through
            the final check.
          </p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
