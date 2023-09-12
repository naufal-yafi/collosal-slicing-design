import Title from "@/components/Title";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Title set="Collosal - Tell us about your problem and how we can help" />

      <main className={`${notoSans.className}`}></main>
    </>
  );
}
