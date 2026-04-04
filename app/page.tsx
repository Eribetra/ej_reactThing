import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <Location />
      <Contact />
    </main>
  );
}
