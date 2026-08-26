import { CtaBar, PageHero, SectionTitle } from "../components/PageParts";

const expectations = [
  [
    "01",
    "Tell us what changed",
    "Share the symptoms, timing, and anything you have already tried.",
  ],
  [
    "02",
    "Choose the right response",
    "We help you decide whether the issue needs immediate attention or a scheduled visit.",
  ],
  [
    "03",
    "Get a clear next step",
    "You will know what happens next before our technician arrives.",
  ],
];

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="Let's get your plumbing problem handled quickly."
        text="Call during business hours or text us after hours. We are ready to help with small repairs, large problems, and everything in between."
      />
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Reach out"
              title="Call or text anytime."
              text="A real conversation is often the fastest way to understand what your plumbing needs. Send the basics and our team will help you choose the next step."
            />
            <div className="space-y-4">
              <a
                href="tel:+16824362800"
                className="flex items-center gap-5 rounded-2xl border border-slate-200 p-5 shadow-sm"
              >
                <span className="grid size-12 place-items-center rounded-full bg-sky-50 text-xl text-sky-700">
                  ☎
                </span>
                <span>
                  <small className="block text-xs font-bold uppercase tracking-widest text-amber-700">
                    Call us
                  </small>
                  <strong className="text-xl text-slate-900">
                    1 (682) 436-2800
                  </strong>
                </span>
              </a>
              <a
                href="sms:+16824362800"
                className="flex items-center gap-5 rounded-2xl border border-slate-200 p-5 shadow-sm"
              >
                <span className="grid size-12 place-items-center rounded-full bg-amber-50 text-xl text-amber-700">
                  ✉
                </span>
                <span>
                  <small className="block text-xs font-bold uppercase tracking-widest text-amber-700">
                    After hours
                  </small>
                  <strong className="text-xl text-slate-900">
                    Text our dispatch team
                  </strong>
                </span>
              </a>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-950 p-7 text-slate-300">
              <h2 className="font-serif text-2xl text-white">
                Before you reach out
              </h2>
              <p className="mt-3 leading-7">
                If water is actively damaging the property, shut off the nearest
                valve or main supply when safe to do so, then contact us
                immediately.
              </p>
            </div>
          </div>
          <form
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5"
            onSubmit={(event) => event.preventDefault()}
          >
            <h2 className="font-serif text-3xl text-slate-900">
              Request service
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Tell us a little about the issue and we&apos;ll follow up.
            </p>
            <div className="mt-7 grid gap-5">
              <label className="text-sm font-bold text-slate-800">
                Your name
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  required
                  placeholder="Name"
                />
              </label>
              <label className="text-sm font-bold text-slate-800">
                Phone number
                <input
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  type="tel"
                  required
                  placeholder="Phone number"
                />
              </label>
              <label className="text-sm font-bold text-slate-800">
                How can we help?
                <textarea
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
                  rows="6"
                  placeholder="Tell us about the issue"
                />
              </label>
              <button
                className="rounded-xl bg-sky-700 px-5 py-4 font-bold text-white"
                type="submit"
              >
                Send request →
              </button>
              <small className="text-slate-500">
                For urgent after-hours issues, please text us directly.
              </small>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-slate-100 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What happens next"
            title="A calm, clear start to getting things fixed."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {expectations.map(([number, title, text]) => (
              <div
                className="border-t-4 border-amber-600 bg-white p-7"
                key={number}
              >
                <span className="text-3xl font-black text-amber-700">
                  {number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBar />
    </main>
  );
}
