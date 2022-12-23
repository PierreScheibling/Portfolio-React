import { useState } from "react";
//Styled
import styled from "styled-components";
import { motion } from "framer-motion";
//Pages
import Contact from "../../pages/Contact.jsx";
//Style
import "./_burger.scss";
//Animations
import { slideReveal } from "../../Animations.jsx";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);
  const { animate, initial, transition } = slideReveal;

  function clickBurger(e) {
    e.currentTarget.classList.toggle("close");
    setIsActive((current) => !current);
    {
      return (
        <div>
          {isActive ? (
            <div>
              <Contact
              // initial={initial}
              // animate={animate}
              // transition={transition}
              />
            </div>
          ) : null}
        </div>
      );
    }
  }

  // function animateOpenCloseMenu() {
  //   let navBG = document.querySelector(".nav__background");
  //   let tl = gsap.timeline({
  //     defaults: { ease: "power3.out", duration: 0.45 },
  //   });
  //   if (menuActive) {
  //     tl.fromTo(
  //       navBG,
  //       { scaleY: 0, transformOrigin: "bottom" },
  //       { scaleY: 1, transformOrigin: "top" }
  //     );
  //     tl.fromTo(
  //       links,
  //       { opacity: 0, top: "100%" },
  //       { opacity: 1, top: "0%", stagger: 0.05, delay: -0.35 }
  //     );
  //   } else {
  //     tl.fromTo(
  //       links,
  //       { opacity: 1, top: "100%" },
  //       { opacity: 0, top: "100%", stagger: -0.05 }
  //     );
  //     tl.fromTo(
  //       navBG,
  //       { scaleY: 1, transformOrigin: "bottom" },
  //       { scaleY: 0, transformOrigin: "top", delay: -0.35 }
  //     );
  //   }
  // }

  // animateOpenCloseMenu();

  return (
    <div className="burger hamburger-box" onClick={clickBurger}>
      <div className="line line--1"></div>
      <div className="line line--2"></div>
    </div>
  );
};

export default Burger;
