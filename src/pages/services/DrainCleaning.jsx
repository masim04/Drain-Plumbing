import { CtaBar, PageHero } from "../../components/PageParts";

export default function DrainCleaning() {
  return (
    <main>
      <PageHero
        eyebrow="Drain cleaning"
        title="Clear pipes, reduce backups, and restore daily flow."
        text="A slow or blocked drain is usually a sign that buildup is restricting flow somewhere in the line. We diagnose the exact point of the problem so the fix lasts and does not create a repeat issue."
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-7 text-lg leading-8 text-slate-700">
          <p>Drain cleaning is one of the most common and most urgent plumbing services we provide, because a slow drain can quickly turn into a complete blockage. Kitchen sinks, bathroom drains, shower lines, tubs, and main sewer branches all collect different forms of buildup over time. In a kitchen, greasy residue and food particles are often the main problem. In a bathroom, hair, soap scum, and mineral buildup can create a stubborn restriction that grows worse each week.</p>
          <p>When a drain does not flow freely, the problem is rarely only a visible trap or fixture. The real issue may be deeper in the line or in a connected branch that is not obvious from a quick look. That is why professional drain cleaning goes beyond clearing the visible opening. We inspect the system, identify where flow is restricted, and remove the obstruction in a way that restores normal function without causing additional damage.</p>
          <p>Routine cleaning is also valuable because it reduces the chance of backups, odors, and recurring clogs. If a drain is slow but still usable, it is usually an early warning sign that the line is beginning to collect debris. Addressing it before it becomes a complete blockage can prevent messy repairs and protect nearby fixtures. A well-maintained line also supports better pressure, cleaner flow, and fewer service calls down the road.</p>
          <p>Our approach is practical and careful. We focus on the root cause and correct the condition rather than applying a temporary remedy that fails again within days. Whether you are dealing with a single sink or a full-house plumbing issue, drain cleaning is often the most effective first step toward restoring smooth and reliable drainage.</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
