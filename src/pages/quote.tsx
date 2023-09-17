import ButtonSecondary from "@button/ButtonSecondary";
import Layout from "@component/Layout";
import FormQuote from "@form/FormQuote";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";

const Quote = () => {
  return (
    <>
      <Layout title="Send Quote | Collosal">
        <div className="pt-14">
          <SectionLine>
            <SectionBadge
              label="send quote"
              title="Tell us about your problem and how we can help"
              desc="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
            >
              <div className="mt-12">
                <ButtonSecondary type="muted" link="/contact">
                  Ask Us
                </ButtonSecondary>
              </div>
            </SectionBadge>
            <SectionImage>
              <div className="w-full flex justify-end">
                <FormQuote />
              </div>
            </SectionImage>
          </SectionLine>
        </div>
      </Layout>
    </>
  );
};

export default Quote;
