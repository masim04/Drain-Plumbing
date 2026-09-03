import { useState } from "react";
import logo from "../assets/logo.webp";
const links = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["locations", "Locations"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
    ["blog", "Blog"],
];

export default function Navbar({ activePage }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-950 px-5 py-3 text-xs text-slate-300 hidden md:block">
        <div className="mx-auto flex max-w-7xl justify-between gap-4">
          <span>Serving Dallas-Fort Worth Metroplex</span>
          <a className="font-bold text-white" href="sms:+16824362800">
            Work Time: 8 am to 5 pm, Call us: 1 (682) 436-2800
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex justify-between min-h-20 max-w-7xl items-center gap-5 px-5">
          <a href="#home" className="flex items-center gap-3 text-slate-900">
            <span className="grid size-11 place-items-center rounded-md ">
              <img src={logo} alt="Logo" />
            </span>
            <span>
              <strong className="block text-lg leading-none tracking-tight sm:text-2xl">
                DRAIN &amp; PLUMBING
              </strong>
              <small className="mt-1 block text-[9px] font-bold tracking-[.25em] text-amber-700">
                SERVICES
              </small>
            </span>
          </a>
          <button
            className="ml-auto text-2xl text-slate-800 lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <nav
            className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-20 flex-col gap-4 border-b border-slate-200 bg-white p-5 lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}
          >
            {links.map(([hash, label]) => (
              <a
                key={hash}
                href={`#${hash}`}
                onClick={() => setOpen(false)}
                className={`text-sm font-extrabold uppercase tracking-wider ${activePage === hash ? "text-sky-700" : "text-slate-700 hover:text-sky-700"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+16824362800"
            className="hidden rounded-full bg-sky-700 text-slate-300 px-5 py-3 text-sm font-bold shadow-lg shadow-sky-700/20 transition hover:-translate-y-0.5 hover:bg-sky-800 sm:inline-flex"
          >
            Call 1 (682) 436-2800
          </a>
        </div>
      </header>
    </>
  );
}
