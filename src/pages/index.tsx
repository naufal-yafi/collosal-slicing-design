import ButtonPrimary from "@button/ButtonPrimary";
import ButtonSecondary from "@button/ButtonSecondary";
import BackgroundBlur from "@component/BackgroundBlur";
import Footer from "@component/Footer";
import Header from "@component/Header";
import Title from "@component/Title";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Title />

      <Header />

      <BackgroundBlur />

      <main
        className={`${notoSans.className} pt-32 md:pt-40 px-6 z-0 md:px-32 flex flex-col justify-center items-center`}
      >
        <hgroup className="text-center text-white w-2/3">
          <h3 className="text-green text-[13px] md:text-[15px] mb-4">
            CLIENT-DEVELOPMENT DRIVEN
          </h3>
          <h1 className="text-[32px] md:text-[35px] font-bold tracking-wide">
            We Design. We Develop. We Ship. In The Same Day.
          </h1>
          <p className="text-[14px] text-muted leading-loose mt-5">
            We are committed to not making clients wait. We will deliver the
            work as quickly as possible. Even on the same day. Even so, we do
            not reduce the quality of our work.
          </p>
        </hgroup>
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-5 mt-8">
          <ButtonPrimary w_full={true}>Send Quote</ButtonPrimary>
          <ButtonSecondary type="muted" w_full={true}>
            Learn More
          </ButtonSecondary>
        </div>
      </main>

      <Footer />
    </>
  );
}
