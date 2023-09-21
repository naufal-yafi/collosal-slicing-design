import AuthorCard from "@card/AuthorCard";
import CloudTag from "@component/CloudTag";
import Layout from "@component/Layout";
import CONTENT_BLOG from "@data/Content_Blog";
import FormComment from "@form/FormComment";
import ParagraphBottom from "@layout/Blog/ParagraphBottom";
import ParagraphTop from "@layout/Blog/ParagraphTop";
import Recommendation from "@layout/Blog/Recommendation";
import Responses from "@layout/Blog/Responses";
import HeroCenterContent from "@section/HeroCenterContent";
import blogContent from "@thumbnail/content-blog.webp";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BlogDetail = () => {
  const router = useRouter();
  const { titleSlug } = router.query;
  const blog = CONTENT_BLOG.find((blog) => blog.slug === titleSlug);

  useEffect(() => {
    if (!blog) {
      router.push("/blog");
    }
  }, [blog]);

  return (
    <>
      <Layout title={`${blog?.title} - Blog Detail | Collosal`}>
        <main>
          <div>
            <HeroCenterContent
              label="read"
              title={blog?.title}
              desc={`${blog?.date} • ${blog?.reading_time}`}
            />
          </div>
        </main>

        <section>
          <Image
            src={`/assets/blog-thumbnail/${blog?.thumbnail}.png`}
            alt="thumbnail"
            width={100}
            height={100}
            className="w-full h-auto rounded-[5px]"
            unoptimized={true}
          />
        </section>

        <ParagraphTop />

        <section>
          <Image
            src={blogContent}
            alt="illustration"
            className="w-full rounded-[5px]"
          />
        </section>

        <ParagraphBottom />

        <div className="px-6 md:px-32 lg:px-64 mt-8 flex gap-5 flex-wrap">
          <CloudTag tag="Figma" />
          <CloudTag tag="UI Design" />
          <CloudTag tag="Curated List" />
        </div>

        <section className="lg:px-64">
          <AuthorCard
            photo={`/assets/profile-photo/${blog?.author.photo}.png`}
            name={blog?.author.username}
            job={blog?.author.job}
          />
        </section>

        <Recommendation />

        <Responses />

        <section className="lg:px-64 flex justify-center">
          <FormComment />
        </section>
      </Layout>
    </>
  );
};

export default BlogDetail;
