import ButtonSecondary from "@button/ButtonSecondary";
import BackgroundBlur from "@component/BackgroundBlur";
import Footer from "@component/Footer";
import Header from "@component/Header";
import Title from "@component/Title";

const handler404 = () => {
  return (
    <>
      <Title set="Page Not Found - 404 Not Found"></Title>

      <Header />

      <BackgroundBlur />

      <main className="pt-32 md:pt-40 px-6 z-0 md:px-32 w-full flex flex-col justify-center items-center">
        <hgroup className="text-center text-white w-2/3">
          <h3 className="text-red text-[13px] md:text-[15px] mb-4 font-semibold">
            ERROR
          </h3>
          <h1 className="text-[32px] md:text-[35px] font-bold tracking-wide">
            The page you are looking for is not on this website, please check
            again
          </h1>
          <p className="text-[14px] text-muted leading-loose mt-5">
            The system cannot find the page you are looking for, maybe you have
            the wrong path or the page has been deleted.
          </p>
        </hgroup>
        <div className="mt-8">
          <ButtonSecondary type="muted" w_full={true}>
            Back to Home
          </ButtonSecondary>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default handler404;
