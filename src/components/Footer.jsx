import logo from "../assets/logo.webp";
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="grid size-10 place-items-center ">
              <img src={logo} alt="Logo" />
            </span>
            <strong>DRAIN &amp; PLUMBING</strong>
          </a>
          <p className="mt-5 max-w-sm leading-7">
            Professional plumbing support for homes and businesses across the
            Dallas-Fort Worth Metroplex.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-amber-400">
            Explore
          </h2>
          <div className="grid gap-3">
            <a href="#about" className="hover:text-white">
              About our team
            </a>
            <a href="#services" className="hover:text-white">
              Plumbing services
            </a>
            <a href="#locations" className="hover:text-white">
              Service locations
            </a>
            <a href="#gallery" className="hover:text-white">
              Project gallery
            </a>
            <a href="#contact" className="hover:text-white">
              Contact us
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-amber-400">
            Contact
          </h2>
          <div className="grid gap-3">
            <a href="tel:+16824362800">1 (682) 436-2800</a>
            <a href="sms:+16824362800">Text after hours</a>
            <span>Dallas-Fort Worth, Texas</span>
            <span>Licensed, bonded, and insured</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Drain &amp; Plumbing Services. All rights
        reserved.
      </div>
    </footer>
  );
}
