import iconMenu from "@logo/align-justify.svg";
import iconUp from "@logo/arrow-up.svg";
import collosalLogo from "@logo/collosal-logo.svg";
import iconClose from "@logo/x.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonSecondary from "./Button/ButtonSecondary";

const Header = (props: any) => {
  const [background, setBackground] = useState("");
  const [arrowUp, setArrowUp] = useState("hidden");
  const [responsivePosition, setResponsivePosition] = useState("mt-0");
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [positionNavbar, setPositionNavbar] = useState("mt-5");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setBackground("bg-light backdrop-blur-[2px] px-8");
        setArrowUp("block");
        setResponsivePosition("mt-4");
        setPositionNavbar("mt-9 pr-8");
      } else {
        setBackground("");
        setArrowUp("hidden");
        setResponsivePosition("mt-0");
        setPositionNavbar("mt-5");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbar = () => {
    setActiveNavbar(activeNavbar ? false : true);
  };

  const ACTIVE = "pricing-title font-medium";
  const NON = "pricing-title font-normal opacity-80 hover:opacity-50";

  return (
    <>
      <header
        className={`fixed px-6 lg:px-32 text-white rounded-md w-full ${responsivePosition} md:mt-4`}
        id="#"
      >
        <div
          className={`h-20 rounded-md flex flex-row justify-between items-center z-20 ${background} ease-linear transition duration-500`}
        >
          <Link href="/">
            <div className="flex gap-3 items-center">
              <Image
                src={collosalLogo}
                alt="Logo Company"
                className="w-5 h-5"
              />
              <h1 className="font-semibold text-xl">Collosal</h1>
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li className={props.params === "/service" ? ACTIVE : NON}>
                <Link href="/service">Services</Link>
              </li>
              <li className={props.params === "/work" ? ACTIVE : NON}>
                <Link href="/work">How We Work</Link>
              </li>
              <li className={props.params === "/project" ? ACTIVE : NON}>
                <Link href="/project">Project</Link>
              </li>
              <li className={props.params === "/about" ? ACTIVE : NON}>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>

          <button
            className="flex md:hidden bg-light cursor-pointer hover:bg-muted rounded-[3px] w-10 h-10 justify-center items-center"
            onClick={handleNavbar}
          >
            <Image src={iconMenu} alt="menu" />
          </button>

          <div className="hidden md:block">
            <ButtonSecondary link="/contact" size="small" type="muted">
              Contact
            </ButtonSecondary>
          </div>
        </div>
      </header>

      <div
        className={`${arrowUp} z-30 fixed bottom-8 right-8 w-10 h-10 flex justify-center items-center rounded-full bg-light hover:bg-muted backdrop-blur-sm transition duration-300 animate-bounce hover:animate-none`}
      >
        <Link href="#">
          <button className="opacity-80 pt-1">
            <Image src={iconUp} alt="arrow up" />
          </button>
        </Link>
      </div>

      <section
        className={`block ${
          activeNavbar ? "translate-x-[0px]" : "translate-x-[-100%]"
        } transition duration-700 md:hidden fixed top-0 left-0 z-50 h-screen w-full bg-dark bg-opacity-80 backdrop-blur-sm pt-0`}
      >
        <div className={`w-full flex justify-end ${positionNavbar}`}>
          <button
            className="w-10 h-10 bg-light hover:bg-muted rounded-[3px] flex justify-center items-center"
            onClick={handleNavbar}
          >
            <Image src={iconClose} alt="icon close" />
          </button>
        </div>

        <nav className="w-full mt-10">
          <ul className="w-full flex flex-col justify-center items-center gap-5">
            <li
              className={`w-full ${props.params === "/service" ? ACTIVE : NON}`}
            >
              <Link href="/service">
                <button className="py-3 text-white hover:bg-muted hover:text-dark rounded-[3px] w-full">
                  Services
                </button>
              </Link>
            </li>
            <li className={`w-full ${props.params === "/work" ? ACTIVE : NON}`}>
              <Link href="/work">
                <button className="py-3 text-white hover:bg-muted hover:text-dark rounded-[3px] w-full">
                  How We Work
                </button>
              </Link>
            </li>
            <li
              className={`w-full ${props.params === "/project" ? ACTIVE : NON}`}
            >
              <Link href="/project">
                <button className="py-3 text-white hover:bg-muted hover:text-dark rounded-[3px] w-full">
                  Project
                </button>
              </Link>
            </li>
            <li
              className={`w-full ${props.params === "/about" ? ACTIVE : NON}`}
            >
              <Link href="/about">
                <button className="py-3 text-white hover:bg-muted hover:text-dark rounded-[3px] w-full">
                  About
                </button>
              </Link>
            </li>
            <li className="w-full pt-10">
              <Link href="/contact">
                <button className="py-3 text-sm text-dark rounded-[3px] hover:opacity-70 bg-white w-full">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

Header.defaultProps = {
  params: "/",
};

export default Header;
