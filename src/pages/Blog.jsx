import { CtaBar, PageHero } from "../components/PageParts";

import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";
import service5 from "../assets/extra1.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export const blogPosts = [
  {
    slug: "why-slow-drains-get-worse",
    title: "Why Slow Drains Get Worse Over Time",
    category: "Drain care",
    readTime: "6 minute read",
    image: service1,
    summary:
      "A slow drain is rarely a single issue. In most homes, it is the first warning sign that buildup, pipe wear, or poor venting is beginning to disrupt the plumbing system.",
  },
  {
    slug: "water-heater-maintenance",
    title: "The Real Value of Water Heater Maintenance",
    category: "Water heaters",
    readTime: "7 minute read",
    image: service5,
    summary:
      "A water heater works hard every day, and routine maintenance is the difference between dependable hot water and a surprise breakdown when you need it most.",
  },
  {
    slug: "spot-hidden-leaks-early",
    title: "How to Spot Hidden Leaks Before They Damage Your Home",
    category: "Leak detection",
    readTime: "8 minute read",
    image: service2,
    summary:
      "Water leaks do not always announce themselves with a visible puddle. The most costly leaks are often the ones hiding behind walls, under cabinets, or beneath slabs.",
  },
  {
    slug: "repair-vs-replace-pipes",
    title: "Repair or Replace? How to Choose the Right Pipe Solution",
    category: "Pipe systems",
    readTime: "9 minute read",
    image: service3,
    summary:
      "Not every pipe problem calls for a full replacement, but old or compromised lines can become a recurring source of trouble if they are ignored too long.",
  },
  {
    slug: "prevent-sewer-backups",
    title: "What Homeowners Need to Know About Sewer Backup Prevention",
    category: "Sewer care",
    readTime: "7 minute read",
    image: service4,
    summary:
      "Sewer backups can be sudden, unpleasant, and costly. Prevention starts with understanding what causes blockages and how a property can become vulnerable over time.",
  },
];

function BlogCard({ post }) {
  return (
    <a
      href={`#blog/${post.slug}`}
      onClick={(event) => {
        event.preventDefault();
        window.location.hash = `#blog/${post.slug}`;
      }}
      className="group block overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <img src={post.image} alt={post.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
          <span>{post.category}</span>
          <span className="text-slate-500">{post.readTime}</span>
        </div>
        <h2 className="mt-4 font-serif text-3xl text-slate-900">{post.title}</h2>
        <p className="mt-4 leading-7 text-slate-600">{post.summary}</p>
        <span className="mt-6 inline-block font-bold text-sky-700">
          Read article →
        </span>
      </div>
    </a>
  );
}

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights & advice"
        title="Helpful guidance for homeowners and property managers."
        text="Explore practical plumbing articles written to help you understand common repair issues before they become expensive problems."
      />
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
