import { CtaBar, PageHero } from "../../components/PageParts";

export default function PipeReplacement() {
  return (
    <main>
      <PageHero
        eyebrow="Pipe replacement"
        title="Remove aging plumbing and protect the next decade of service."
        text="Pipe replacement is often the right long-term answer when corrosion, repeated leaks, or outdated materials have begun to reduce reliability."
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-7 text-lg leading-8 text-slate-700">
          <p>Pipe replacement is a major but highly effective service when the plumbing system is aging, at risk of repeated failure, or built with materials that are no longer dependable. Many homeowners do not think about the condition of the pipe network until they start seeing leaks, pressure problems, or patchwork repairs around the home. But once a system shows repeated trouble, it may be more cost-effective to replace the affected run rather than continue paying for emergency fixes.</p>
          <p>Older materials can become brittle, coroded, or obstructed over time. Corrosion can compromise the interior, reduce pressure, and create pinhole leaks that are difficult to trace. Even if a single section is repaired, the surrounding pipe may be approaching the end of its useful life. In those cases, replacement offers stability and helps prevent recurring issues from the same older network. It also improves the reliability of water flow for every fixture connected to that system.</p>
          <p>Replacement is usually approached strategically, aiming to address the weakest or most problematic sections while protecting the rest of the property. A plumber can inspect the system, look for patterns of failure, and explain whether a localized replacement or a broader phased upgrade is most sensible. This keeps the work focused and avoids unnecessary disruption while improving the long-term quality of the plumbing.</p>
          <p>When done properly, pipe replacement reduces risk, improves water flow, and helps the home avoid future repair cycles. It is an investment in system performance and peace of mind. For aging properties, it is often the most practical way to protect the structure, restore confidence, and create a more durable plumbing foundation.</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
