import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const pages = { home: Home, about: About, services: Services, locations: Locations, contact: Contact, gallery: Gallery };

function App() {
  const [page, setPage] = useState(() => window.location.hash.slice(1) || "home");

  useEffect(() => {
    const updatePage = () => setPage(window.location.hash.slice(1) || "home");
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  const Page = pages[page] || Home;

  return <><Navbar activePage={page} /><Page /><Footer /></>;
}

export default App;
