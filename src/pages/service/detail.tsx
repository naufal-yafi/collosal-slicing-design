import Layout from "@component/Layout";
import FAQ from "@layout/Service/Detail/FAQ";
import Features from "@layout/Service/Detail/Features";
import ServiceDevelopment from "@layout/Service/Detail/ServiceDevelopment";
import HeroCenterContent from "@section/HeroCenterContent";
import Link from "next/link";

const ServiceDetail = () => {
  return (
    <>
      <Layout title="Service Detail | Collosal" params="/service">
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="development"
              title="Solve your company's repetitive problems by designing apps"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <ServiceDevelopment />

        <Features />

        <FAQ />

        <section className="text-white flex flex-col md:flex-row justify-center gap-2 mt-10">
          <p>Didn&apos;t find an answer?</p>
          <Link href="/faq">
            <p className="font-semibold text-primary">
              Do not hesitate to ask!{" "}
              <div className="w-full h-[2px] bg-primary"></div>
            </p>
          </Link>
        </section>
      </Layout>
    </>
  );
};

export default ServiceDetail;
