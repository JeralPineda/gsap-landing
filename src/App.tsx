import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Cocktails } from "./components/cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
}

export default App;
