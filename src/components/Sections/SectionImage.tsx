const SectionImage = (props: any) => {
  return (
    <>
      <div className={`w-full ${props.img_right ? "order-1 lg:order-2" : ""}`}>
        {props.children}
      </div>
    </>
  );
};

SectionImage.defaultProps = {
  img_right: false,
};

export default SectionImage;
