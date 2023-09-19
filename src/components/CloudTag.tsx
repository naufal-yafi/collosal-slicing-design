const CloudTag = (props: any) => {
  return (
    <>
      <div className="bg-light border-[1px] border-light px-8 py-2 w-auto rounded-full text-xs text-white">
        {props.tag}
      </div>
    </>
  );
};

CloudTag.defaultProps = {
  tag: "Your Tag",
};

export default CloudTag;
