import ButtonSecondary from "@button/ButtonSecondary";
import FormQuote from "@component/Form/FormQuote";
import Layout from "@component/Layout";
import SectionBadge from "@component/Section/SectionBadge";
import SectionImage from "@component/Section/SectionImage";
import SectionLine from "@component/Section/SectionLine";

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
              <FormQuote />
            </SectionImage>
          </SectionLine>
        </div>
      </Layout>
    </>
  );
};

export default Quote;
