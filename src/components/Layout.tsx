import BackgroundBlur from "./BackgroundBlur";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

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
