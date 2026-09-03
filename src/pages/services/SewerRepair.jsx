import { CtaBar, PageHero } from "../../components/PageParts";

export default function SewerRepair() {
  return (
    <main>
      <PageHero
        eyebrow="Sewer repair"
        title="Protect your home from backups, root intrusion, and damaged lines."
        text="Sewer issues are not just inconvenient—they can disrupt daily life and damage your home if they are left untreated. A careful diagnosis helps preserve the system and prevent repeat failures."
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-7 text-lg leading-8 text-slate-700">
          <p>Sewer repair becomes necessary when the main drainage line has become blocked, cracked, offset, or infiltrated by roots. These problems often begin quietly, but their symptoms are familiar to homeowners who have faced a backup: gurgling drains, slow fixtures, foul odors, standing water, or multiple drains acting up at once. These signs usually mean the wastewater system is under stress and needs attention before it becomes a more severe disruption.</p>
          <p>Root intrusion is one of the most common causes of sewer line damage, particularly in older neighborhoods and properties with mature trees. Roots search for moisture and can enter tiny cracks or joints in the line. Over time, they spread and trap debris, reducing flow and stressing the pipe. In other cases, a damaged line may suffer from shifting soil, poor installation, corrosion, or age-related deterioration. These conditions can worsen under heavy rain or when the system is overloaded.</p>
          <p>Because sewer-related issues can affect more than one fixture, a full understanding of the system is essential. A plumber may inspect the line and determine whether the problem is a partial blockage in one branch or a deeper structural issue in the main sewer line. This exact diagnosis informs the repair strategy and reduces the chance of repeated backups after a temporary fix.</p>
          <p>Repairing a sewer problem protects the property from unsanitary conditions and prevents damage to flooring, walls, and lower levels. It also restores confidence that wastewater is flowing away as it should. That is why sewer repair is a priority service: it addresses a serious risk at its source and helps maintain a healthier, safer home environment.</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
