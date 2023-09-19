import Layout from "@component/Layout";
import DynamicDropdown from "@layout/FAQ/DynamicDropdown";
import HeroCenterContent from "@section/HeroCenterContent";

const FAQS = () => {
  return (
    <>
      <Layout title="Find out more - FAQ | Collosal">
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="faq"
              title="Frequently asked questions, maybe the same as yours"
              desc=""
            />
          </div>
        </main>
        <section>
          <hr className="border-light" />
        </section>
        <DynamicDropdown />
      </Layout>
    </>
  );
};

export default FAQS;
