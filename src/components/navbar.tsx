import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants/data";
import gsap from "gsap";

export const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
