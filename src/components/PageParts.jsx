const phone = "1 (682) 436-2800";

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-sky-800 px-5 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-black uppercase tracking-[.22em] text-amber-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[.98] tracking-tight sm:text-7xl">
          {title}
        </h1>
        <div className="my-7 h-1 w-20 bg-amber-500" />
        <p className="max-w-2xl text-lg leading-8 text-sky-100">{text}</p>
      </div>
    </section>
  );
}

export function CtaBar() {
  return (
    <section className="bg-gradient-to-r from-sky-700 to-emerald-50 px-5 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-amber-200">
            Need a plumber?
          </p>
          <h2 className="font-serif text-4xl">
            We&apos;ll restore comfort quickly.
          </h2>
        </div>
        <a
          href="tel:+16824362800"
          className="rounded-full bg-sky-700 px-6 py-4 font-bold text-slate-900 shadow-xl "
        >
          Call {phone} →
        </a>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

export function LongForm({ eyebrow, title, paragraphs, items }) {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-amber-700">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h2>
        </div>
        <div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div
                className="rounded-xl bg-slate-100 p-4 font-semibold text-slate-800"
                key={item}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
