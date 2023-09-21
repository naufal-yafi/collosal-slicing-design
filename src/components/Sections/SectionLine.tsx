const SectionLine = (props: any) => {
  return (
    <>
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full justify-center items-center">
        {props.children}
      </section>
    </>
  );
};

export default SectionLine;
