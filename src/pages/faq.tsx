import Layout from "@component/Layout";
import ListFaq from "@layout/FAQ/ListFaq";
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
        <ListFaq />
      </Layout>
    </>
  );
};

export default FAQS;
