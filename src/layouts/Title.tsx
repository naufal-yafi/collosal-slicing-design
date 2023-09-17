import Head from "next/head";

const Title = (props: any) => {
  return (
    <Head>
      <meta name="application-name" content="Collosal" />
      <meta name="theme-color" content="#6016FC" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Tell us about your problem and how we can help."
      />
      <meta
        name="keywords"
        content="collosal, landing page, i help you, designer, blog, blogger, developer, ui designer, frontend developer, startup"
      />
      <link rel="manifest" href="/manifest.json" />
      <title>{props.set}</title>
    </Head>
  );
};

Title.defaultProps = {
  set: "Your Title",
};

export default Title;
