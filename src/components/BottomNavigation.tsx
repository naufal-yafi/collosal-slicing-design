import NAV_DATA from "@/data/Nav_Data";
import collectionOutline from "@logo/collection-outline.svg";
import Image from "next/image";
import Link from "next/link";

const NAVIGATION = (props: any) => {
  return (
    <>
      <div className="text-sm">
        <h1 className="text-sm">{props.title}</h1>
        <ul className="mt-4 text-muted flex flex-col gap-2">
          {props.data.map((item: any) => (
            <li className="hover:text-white" key={item.index}>
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
    <div className="w-full mt-12 text-white flex gap-28">
      <div>
        <div className="flex font-semibold text-lg gap-4">
          <Image
            src={collectionOutline}
            height={24}
            width={24}
            alt="icon collection outline"
          />
          Collosal
        </div>
        <p className="text-muted text-sm mt-4 leading-loose">
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
