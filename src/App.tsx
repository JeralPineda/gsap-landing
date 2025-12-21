import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { About } from "./components/about";
import { Art } from "./components/art";
import { Cocktails } from "./components/cocktails";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Menu } from "./components/menu";
import { Navbar } from "./components/navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}

export default App;
