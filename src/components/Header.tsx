import collosalLogo from "@logo/collosal-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonSecondary from "./Button/ButtonSecondary";

const Header = (props: any) => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setBackground("bg-light backdrop-blur-[2px]");
      } else {
        setBackground("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ACTIVE = "pricing-title font-medium";
  const NON = "pricing-title font-normal opacity-80 hover:opacity-50";

  return (
    <header className="fixed px-32 text-white rounded-md w-full mt-4">
      <div
        className={`px-8 h-20 rounded-md flex flex-row justify-between items-center z-20 ${background}`}
      >
        <Link href="/">
          <div className="flex gap-3 items-center">
            <Image src={collosalLogo} alt="Logo Company" className="w-5 h-5" />
            <h1 className="font-semibold text-xl">Collosal</h1>
          </div>
        </Link>

        <nav>
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

        <ButtonSecondary link="/contact" size="small" type="muted">
          Contact
        </ButtonSecondary>
      </div>
    </header>
  );
};

Header.defaultProps = {
  params: "/",
};

export default Header;
