import IconListKeyValue from "@card/IconListKeyValue";
import Layout from "@component/Layout";
import FormMessage from "@form/FormMessage";
import iconEmail from "@icon/mail.svg";
import iconPhone from "@icon/phone-call.svg";
import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";

const Contact = () => {
  return (
    <>
      <Layout
        title="Don't be sad if there's a problem call us - Contact | Collosal"
        params="/contact"
      >
        <div className="pt-14">
          <SectionLine>
            <SectionBadge
              label="contact"
              title="We love receiving messages from you, we are waiting for it."
              desc=""
            >
              <div className="flex flex-col gap-5 mt-8">
                <IconListKeyValue
                  icon={iconPhone}
                  key_value="Phone"
                  value="+62 1234 8921"
                />
                <IconListKeyValue
                  icon={iconEmail}
                  key_value="Email"
                  value="support@collosal.tld"
                />
              </div>
            </SectionBadge>
            <SectionImage>
              <div className="w-full flex justify-center lg:justify-end">
                <FormMessage />
              </div>
            </SectionImage>
          </SectionLine>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
