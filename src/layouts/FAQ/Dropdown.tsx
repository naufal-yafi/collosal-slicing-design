const Dropdown = (props: any) => {
  return (
    <>
      <details className="text-white cursor-pointer">
        <summary className="text-xl font-bold">{props.title}</summary>
        <p className="text-sm mt-3 text-muted tracking-wider leading-loose">
          {props.desc}
        </p>
      </details>
    </>
  );
};

Dropdown.defaultProps = {
  title: "Your Title",
  desc: "Your descriptions...",
};

export default Dropdown;
