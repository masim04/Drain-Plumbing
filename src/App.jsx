import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import BlogPage from "./pages/Blog";
import SlowDrainBlog from "./pages/blog/WhySlowDrainsGetWorse";
import WaterHeaterBlog from "./pages/blog/WaterHeaterMaintenance";
import HiddenLeakBlog from "./pages/blog/SpotHiddenLeaks";
import PipeDecisionBlog from "./pages/blog/RepairOrReplacePipes";
import SewerBackupBlog from "./pages/blog/PreventSewerBackups";
import DrainCleaning from "./pages/services/DrainCleaning";
import LeakRepair from "./pages/services/LeakRepair";
import WaterLineRepair from "./pages/services/WaterLineRepair";
import SewerRepair from "./pages/services/SewerRepair";
import WaterHeaterService from "./pages/services/WaterHeaterService";
import PipeReplacement from "./pages/services/PipeReplacement";

const pages = {
  home: Home,
  about: About,
  services: Services,
  locations: Locations,
  contact: Contact,
  gallery: Gallery,
  blog: BlogPage,
};

const blogPages = {
  "why-slow-drains-get-worse": SlowDrainBlog,
  "water-heater-maintenance": WaterHeaterBlog,
  "spot-hidden-leaks-early": HiddenLeakBlog,
  "repair-vs-replace-pipes": PipeDecisionBlog,
  "prevent-sewer-backups": SewerBackupBlog,
};

const servicePages = {
  "drain-cleaning": DrainCleaning,
  "leak-repair": LeakRepair,
  "water-line-repair": WaterLineRepair,
  "sewer-repair": SewerRepair,
  "water-heater-service": WaterHeaterService,
  "pipe-replacement": PipeReplacement,
};

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.slice(1) || "home";
    const [route] = hash.split("/");
    return route || "home";
  });

  useEffect(() => {
    const updatePage = () => {
      const hash = window.location.hash.slice(1) || "home";
      const [route] = hash.split("/");
      setPage(route || "home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  const hash = window.location.hash.slice(1) || "home";
  const [route, slug] = hash.split("/");

  if (route === "blog") {
    if (slug && blogPages[slug]) {
      const BlogComponent = blogPages[slug];
      return (
        <>
          <Navbar activePage="blog" />
          <BlogComponent />
          <Footer />
        </>
      );
    }

    return (
      <>
        <Navbar activePage="blog" />
        <BlogPage />
        <Footer />
      </>
    );
  }

  if (route === "service") {
    if (slug && servicePages[slug]) {
      const ServicePage = servicePages[slug];
      return (
        <>
          <Navbar activePage="services" />
          <ServicePage />
          <Footer />
        </>
      );
    }

    return (
      <>
        <Navbar activePage="services" />
        <Services />
        <Footer />
      </>
    );
  }

  const Page = pages[route] || Home;

  return <><Navbar activePage={route} /><Page /><Footer /></>;
}

export default App;
