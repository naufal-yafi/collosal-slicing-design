import FormMessage from "@component/Form/FormMessage";
import Layout from "@component/Layout";
import SectionBadge from "@component/Section/SectionBadge";
import SectionImage from "@component/Section/SectionImage";
import SectionLine from "@component/Section/SectionLine";

const Contact = () => {
  return (
    <>
      <Layout title="Contact | Collosal" params="/contact">
        <div className="pt-14">
          <SectionLine>
            <SectionBadge
              label="contact"
              title="We love receiving messages from you, we are waiting for it."
              desc=""
            ></SectionBadge>
            <SectionImage>
              <FormMessage />
            </SectionImage>
          </SectionLine>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
