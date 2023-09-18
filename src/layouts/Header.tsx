import ButtonSecondary from "@button/ButtonSecondary";
import iconMenu from "@icon/align-justify.svg";
import iconUp from "@icon/arrow-up.svg";
import collosalLogo from "@icon/collosal-logo.svg";
import iconClose from "@icon/x.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = (props: any) => {
  const [statusNavbar, setStatusNavbar] = useState(false);
  const [blurBackground, setBlurBackground] = useState("");
  const [buttonRiseUp, setButtonRiseUp] = useState("hidden");
  const [positionHeader, setPositionHeader] = useState("mt-0");
  const [positionNavbar, setPositionNavbar] = useState("mt-5");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBlurBackground("bg-light backdrop-blur-[2px] px-8");
        setButtonRiseUp("block");
        setPositionHeader("mt-4");
        setPositionNavbar("mt-9 pr-8");
      } else {
        setBlurBackground("");
        setButtonRiseUp("hidden");
        setPositionHeader("mt-0");
        setPositionNavbar("mt-5");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbar = () => {
    setStatusNavbar(!statusNavbar);
  };

  const ACTIVE = "pricing-title font-medium";
  const NON = "pricing-title font-normal opacity-80 hover:opacity-50";

  return (
    <>
      <header
        className={`fixed px-6 lg:px-32 text-white rounded-md w-full ${positionHeader} md:mt-4`}
        id="#"
      >
        <div
          className={`h-20 rounded-md flex flex-row justify-between items-center z-20 ease-linear transition duration-500 ${blurBackground}`}
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
                <Link href="/how-we-work">How We Work</Link>
              </li>
              <li className={props.params === "/project" ? ACTIVE : NON}>
                <Link href="/projects">Project</Link>
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
        className={`${buttonRiseUp} z-30 fixed bottom-8 right-8 w-10 h-10 flex justify-center items-center rounded-full bg-light hover:bg-muted backdrop-blur-sm transition duration-300 animate-bounce hover:animate-none`}
      >
        <Link href="#">
          <button className="opacity-80 pt-1">
            <Image src={iconUp} alt="arrow up" />
          </button>
        </Link>
      </div>

      <section
        className={`block ${
          statusNavbar ? "translate-x-[0px]" : "translate-x-[-100%]"
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
              <Link href="/how-we-work">
                <button className="py-3 text-white hover:bg-muted hover:text-dark rounded-[3px] w-full">
                  How We Work
                </button>
              </Link>
            </li>
            <li
              className={`w-full ${props.params === "/project" ? ACTIVE : NON}`}
            >
              <Link href="/projects">
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
              <ButtonSecondary long={true} link="/contact">
                Contact
              </ButtonSecondary>
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
