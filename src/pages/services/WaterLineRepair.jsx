import { CtaBar, PageHero } from "../../components/PageParts";

export default function WaterLineRepair() {
  return (
    <main>
      <PageHero
        eyebrow="Water line repair"
        title="Bring back steady pressure and dependable flow."
        text="A water line issue can affect pressure, appliance performance, and daily routines. We identify the source and repair the line with the least disruption possible."
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-7 text-lg leading-8 text-slate-700">
          <p>Water line repair is essential when a pressure problem, burst line, or hidden leak impacts the main supply to your home. A strong, steady flow is something homeowners often take for granted until it changes. Reduced pressure, inconsistent hot water, or random wet spots can point to a problem in the line feeding fixtures or appliances. When the water line is compromised, the entire plumbing system can struggle to perform normally.</p>
          <p>There are several reasons water lines fail. Corrosion, shifting soil, freezing conditions, impact damage, and age-related fatigue can all weaken a pipe over time. In some cases, the damage is gradual and may not produce visible symptoms until the line has already deteriorated. That is why a professional diagnosis matters. A plumber can test the system, identify whether the issue is localized or part of a broader pipe condition, and then recommend the most durable repair or replacement path.</p>
          <p>Water line repair is especially important when the property has older infrastructure or frequent pressure fluctuations. If one section of pipe is failing, it can affect the right balance of pressure across the home and create problems with toilets, showers, washing machines, and other appliances. Fixing the line sooner can improve daily comfort and prevent more wide-reaching damage from hidden leaks or sudden pipe failure.</p>
          <p>A properly repaired water line restores confidence in the system. It improves water delivery, reduces long-term stress on fixtures, and gives homeowners a more stable plumbing experience. When the issue is addressed at the source, the rest of the house functions more reliably and with less risk of recurring disruption.</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
