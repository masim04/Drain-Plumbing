import { CtaBar, PageHero } from "../../components/PageParts";

export default function WaterHeaterService() {
  return (
    <main>
      <PageHero
        eyebrow="Water heater service"
        title="Reliable hot water starts with careful maintenance and smart repairs."
        text="When your water heater is not performing well, it affects showers, cleaning, dishwashing, and comfort. A proper service visit helps restore dependable hot water quickly and safely."
      />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl space-y-7 text-lg leading-8 text-slate-700">
          <p>Water heater service is about more than fixing an inconvenience. It is about protecting the home’s comfort, efficiency, and water availability. When the hot water supply becomes inconsistent, the issue may be caused by sediment buildup, a failing element, a thermostat problem, a leaking tank, or a safety control that needs attention. Each of these issues has different symptoms, and a professional diagnosis helps identify the exact cause instead of guessing.</p>
          <p>One of the most common causes of underperforming heaters is sediment accumulation. Over time, minerals collect in the tank and reduce transfer efficiency. This often leads to noisy operation, longer recovery time, and reduced effective hot water volume. If a system is older or has been neglected, a flush and inspection may restore much of its performance. A plumber can also check the anode rod, pressure relief valve, and connections to confirm the system is operating safely.</p>
          <p>Service is also important because a failing water heater can become a costly water damage issue if the tank leaks. Small warning signs like moisture around the base, unusual sounds, or unpredictable temperature swings should be addressed promptly. The sooner a system is inspected, the more likely it is that a minor repair will prevent a much larger replacement or leak claim later.</p>
          <p>Whether it is a routine maintenance check, an emergency repair, or a recommendation to replace an aging unit, water heater service helps keep the home comfortable and efficient. A dependable water heater supports daily routines and reduces the stress of surprise cold showers or appliance problems. Good plumbing care is about reliability as much as comfort.</p>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
