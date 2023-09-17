import BackgroundBlur from "@accessories/BackgroundBlur";
import Footer from "@footer";
import Header from "@header";
import Title from "@title";

const Layout = (props: any) => {
  return (
    <>
      <Title set={props.title} />
      <BackgroundBlur />
      <Header params={props.params} />
      {props.children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Your Title",
  params: "/",
  children: "",
};

export default Layout;
