import { CtaBar, PageHero, SectionTitle } from "../components/PageParts";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";
import service5 from "../assets/extra1.jpg";
import service7 from "../assets/systemupgrades.jpg";
const services = [
  [
    "Drain Cleaning",
    "◌",
    service1,
    "Clear kitchen, bathroom, shower, tub, and main-line blockages with a practical diagnosis.",
  ],
  [
    "Leak Repair",
    "⌁",
    service2,
    "Stop hidden leaks behind walls, under slabs, and around fixtures before damage spreads.",
  ],
  [
    "Water Line Repair",
    "≋",
    service3,
    "Restore pressure and dependable flow with accurate pipe diagnostics and targeted repairs.",
  ],
  [
    "Sewer Repair",
    "▣",
    service4,
    "Address backups, root intrusion, aging pipes, and structural problems with lasting solutions.",
  ],
  [
    "Water Heater Service",
    "◍",
    service5,
    "Keep hot water reliable with maintenance, repair, replacement, and tankless system support.",
  ],
  [
    "Pipe Replacement",
    "↻",
    service7,
    "Replace corroded or outdated plumbing with modern materials designed for long-term performance.",
  ],
];
const signs = [
  "Gurgling drains or recurring clogs",
  "Water stains, musty smells, or damp cabinets",
  "Low pressure or sudden pressure changes",
  "No hot water or unusual heater sounds",
  "Sewer odors near cleanouts or bathrooms",
  "A water meter that moves when everything is off",
];

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title="Practical plumbing solutions for every system in your home."
        text="From urgent drain clearing to planned pipe replacement, our team brings careful diagnosis and dependable workmanship to every job."
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What we handle"
            title="Experienced help for the problems you can see and the ones you cannot."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, icon, image, text]) => (
              <article
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
                key={name}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-sky-50 text-2xl text-sky-700">
                    {icon}
                  </span>
                  <h2 className="mt-5 font-serif text-3xl text-slate-900">
                    {name}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    <li>✓ Clear recommendations</li>
                    <li>✓ Quality materials and clean work</li>
                    <li>✓ Final system check</li>
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-block font-bold text-sky-700"
                  >
                    Request this service →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Know the warning signs"
              title="When should you call a plumber?"
              text="Waiting rarely makes a plumbing issue less expensive. A quick conversation can help you decide whether you need emergency support or a scheduled inspection."
            />
            <a
              href="#contact"
              className="inline-flex rounded-full bg-sky-700 px-6 py-4 font-bold text-white"
            >
              Talk with our team
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {signs.map((sign) => (
              <div
                className="rounded-xl bg-white p-5 font-semibold text-slate-800 shadow-sm"
                key={sign}
              >
                ✓ {sign}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our service promise"
            title="The work is only finished when your system is working as it should."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {[
              "Respectful arrival",
              "Detailed inspection",
              "Upfront options",
              "Clean departure",
            ].map((title, i) => (
              <div className="border-t-4 border-sky-700 pt-5" key={title}>
                <span className="text-xs font-bold text-amber-700">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Every visit is organized around making the next step clear.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
