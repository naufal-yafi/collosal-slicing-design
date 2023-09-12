import Head from "next/head";

const Title = (props: any) => {
  return (
    <Head>
      <meta name="application-name" content="Collosal" />
      <meta name="theme-color" content="#6016FC" />
      <meta http-equiv="X-UA-Compatible" content="IE=7" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <title>{props.set}</title>
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

export default Title;
