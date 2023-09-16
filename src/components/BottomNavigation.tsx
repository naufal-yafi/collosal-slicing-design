import NAV_DATA from "@/data/Nav_Data";
import collectionOutline from "@logo/collection-outline.svg";
import Image from "next/image";
import Link from "next/link";

const NAVIGATION = (props: any) => {
  return (
    <>
      <div className="text-sm">
        <h1 className="text-sm text-center md:text-start">{props.title}</h1>
        <ul className="mt-4 text-muted flex flex-col text-center md:text-start gap-2">
          {props.data.map((item: any, index: number) => (
            <li className="hover:text-white" key={index}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const BottomNavigation = () => {
  return (
    <div className="w-full mt-12 text-white flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-36">
      <div>
        <div className="flex justify-center md:justify-start font-semibold text-md gap-4">
          <Image
            src={collectionOutline}
            height={24}
            width={24}
            alt="icon collection outline"
          />
          Collosal
        </div>
        <p className="text-muted text-sm mt-4 leading-loose text-center md:text-start">
          Copyright © 2021 <br />
          Design By Collosal LLC
        </p>
      </div>

      <NAVIGATION title={NAV_DATA[1].title} data={NAV_DATA[1].data} />
      <NAVIGATION title={NAV_DATA[2].title} data={NAV_DATA[2].data} />
      <NAVIGATION title={NAV_DATA[3].title} data={NAV_DATA[3].data} />
    </div>
  );
};

export default BottomNavigation;
