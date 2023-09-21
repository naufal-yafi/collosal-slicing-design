import ButtonSecondary from "@button/ButtonSecondary";
import Layout from "@component/Layout";
import ListBlog from "@layout/Blog/ListBlog";
import HeroCenterContent from "@section/HeroCenterContent";
import { useState } from "react";

const Blog = () => {
  const [moreContent, setMoreContent] = useState(false);

  const handleLoadMore = () => {
    setMoreContent(!moreContent);
  };

  return (
    <>
      <Layout title="Read the blog we created - Blog | Collosal">
        <main className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <HeroCenterContent
              label="blog"
              title="Get precise knowledge wherever you are"
              desc=""
            />
          </div>
        </main>

        <section>
          <hr className="border-light" />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-14 mt-10">
          {moreContent ? (
            <>
              <ListBlog />
              <ListBlog />
            </>
          ) : (
            <ListBlog />
          )}
        </section>

        <div className="flex justify-center mt-20" onClick={handleLoadMore}>
          <ButtonSecondary link="" type="muted">
            {moreContent ? "Load Less" : "Load More"}
          </ButtonSecondary>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
