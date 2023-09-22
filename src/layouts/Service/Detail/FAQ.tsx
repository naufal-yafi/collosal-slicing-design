import Particle from "@accessories/Particle";
import FAQ_DATA from "@data/FAQ_Data";
import HeroCenterContent from "@section/HeroCenterContent";
import Link from "next/link";

const FAQ = () => {
  const faqs = FAQ_DATA.maintenance;

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full lg:w-2/3">
          <Particle />
          <HeroCenterContent
            label="FAQ"
            desc=""
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-x-10 gap-y-20">
          {faqs.map((faq) => (
            <hgroup className="text-white" key={faq.id}>
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <p className="text-muted mt-5">{faq.answer}</p>
            </hgroup>
          ))}
        </div>
      </section>

      <section className="text-white flex flex-col md:flex-row justify-center gap-2 mt-10">
        <p>Didn&apos;t find an answer?</p>
        <Link href="/faq">
          <p className="font-semibold text-primary">
            Do not hesitate to ask!{" "}
            <div className="w-full h-[2px] bg-primary"></div>
          </p>
        </Link>
      </section>
    </>
  );
};

export default FAQ;
