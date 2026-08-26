import { CtaBar, PageHero, SectionTitle } from "../components/PageParts";
import hero from "../assets/Acareful.jpg";
import service1 from "../assets/waterline.jpg";
import service2 from "../assets/extra1.jpg";
import service3 from "../assets/service3.webp";
import service4 from "../assets/systemupgrades.jpg";

const projects = [
  [
    hero,
    "A careful start",
    "Every visit begins with a focused look at the system and the conditions around it.",
  ],
  [
    service1,
    "Drain work",
    "Targeted cleaning helps restore flow while identifying repeat-clog patterns.",
  ],
  [
    service2,
    "Leak diagnosis",
    "Finding the source early helps protect cabinetry, flooring, and drywall.",
  ],
  [
    service3,
    "Water line service",
    "Reliable pressure depends on sound connections and properly sized lines.",
  ],
  [
    service4,
    "System upgrades",
    "Modern plumbing components can improve performance and simplify maintenance.",
  ],
];

export default function Gallery() {
  return (
    <main>
      <PageHero
        eyebrow="Our work"
        title="A closer look at the work behind dependable plumbing."
        text="Explore examples of the systems, repairs, and service work our team handles for homes and businesses."
      />
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Project gallery"
            title="The details matter, from diagnosis to finish."
            text="Our work is practical, careful, and designed to hold up after the tools are packed away."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(([image, title, text], i) => (
              <figure
                className={`${i === 0 ? "md:col-span-2 lg:col-span-2" : ""} overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5`}
                key={title}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-72 w-full object-cover"
                />
                <figcaption className="p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Project {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-slate-900">
                    {title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-sky-950 px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[.2em] text-amber-300">
              Behind every photo
            </p>
            <h2 className="mt-4 font-serif text-5xl">
              Good plumbing work is mostly careful thinking.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-sky-100">
            <p>
              We look beyond the visible symptom to understand pressure, access,
              materials, age, and the way the system is being used.
            </p>
            <p>
              That context lets us recommend repairs that are useful now and
              sensible for the future.
            </p>
          </div>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
