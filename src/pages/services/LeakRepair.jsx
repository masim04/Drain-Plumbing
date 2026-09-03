import { CtaBar, PageHero } from "../../components/PageParts";

export default function LeakRepair() {
  return (
    <main>
      <PageHero
        eyebrow="Leak repair"
        title="Stop hidden leaks before they become costly damage."
        text="A leak may start as a small drip, but moisture behind walls, under cabinets, or beneath floors can spread quickly if it is not diagnosed and repaired early."
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-7 text-lg leading-8 text-slate-700">
          <p>Leak repair is a critical service because many water leaks are not highly visible at first. A pipe may slowly seep behind a wall, under a sink cabinet, or around a slab foundation, creating damage while the visible symptoms seem minor. That is why professionals treat even a small leak as worth investigating. Water damage can cause warped cabinet materials, soft flooring, mold growth, and higher monthly utility costs, all of which can become expensive if ignored.</p>
          <p>Early detection is the key to successful leak repair. Common warning signs include musty odors, damp walls, unexplained water stains, bubbling paint, soft flooring, or a sudden increase in the water bill. Some leaks reveal themselves in the notorious red flags of sound and moisture, while others stay hidden until much more of the structure is affected. A careful inspection can help determine whether the problem is a supply line, drain pipe, fixture connection, or an internal leak under a slab or behind a wall.</p>
          <p>Proper repair is not just a matter of tightening a fitting or replacing a visible pipe. The issue must be diagnosed correctly so the real source is addressed without creating a new leak nearby. In many cases, a repair involves a careful assessment of the surrounding materials, pressure levels, and the condition of the old plumbing. This is especially important in homes with older pipe systems or repeated moisture concerns in the same area.</p>
          <p>Fixing a leak quickly protects the home, preserves finishes, and helps the plumbing system operate efficiently. It also reduces the risk of biological growth, unstable surfaces, and ongoing water loss. When a leak is repaired at the source, the home becomes safer, more comfortable, and less vulnerable to recurring moisture problems.</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
