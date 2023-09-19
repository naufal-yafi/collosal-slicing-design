import ButtonSecondary from "@button/ButtonSecondary";
import BlogCard from "@card/BlogCard";
import Layout from "@component/Layout";
import profile from "@photo/profile-01.png";
import HeroCenterContent from "@section/HeroCenterContent";
import thumbnail from "@thumbnail/thumbnail-01.webp";

const Blog = () => {
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
          <BlogCard thumbnail={thumbnail} author_photo={profile} />
          <BlogCard thumbnail={thumbnail} author_photo={profile} />
          <BlogCard thumbnail={thumbnail} author_photo={profile} />
          <BlogCard thumbnail={thumbnail} author_photo={profile} />
          <BlogCard thumbnail={thumbnail} author_photo={profile} />
          <BlogCard thumbnail={thumbnail} author_photo={profile} />
        </section>

        <div className="flex justify-center mt-20">
          <ButtonSecondary link="" type="muted">
            Load More
          </ButtonSecondary>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
