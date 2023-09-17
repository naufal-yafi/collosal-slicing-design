import SectionBadge from "@section/SectionBadge";
import SectionImage from "@section/SectionImage";
import SectionLine from "@section/SectionLine";

const UiDesign = () => {
  return (
    <>
      <SectionLine>
        <SectionImage></SectionImage>
        <SectionBadge
          label="ui design"
          title="Don't let your idea get caught by others, design a prototype for your idea"
          desc="Delegate your ideas as quickly as possible, create beautiful designs and vivid prototypes."
        ></SectionBadge>
      </SectionLine>
    </>
  );
};

export default UiDesign;
