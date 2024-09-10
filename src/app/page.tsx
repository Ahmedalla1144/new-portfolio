import About from "./components/About/About";
import Acomplishments from "./components/Acomplishments/Acomplishments";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Acomplishments />
      <Footer />
    </>
  );
}
