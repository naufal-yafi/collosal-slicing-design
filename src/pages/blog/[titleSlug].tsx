import AuthorCard from "@card/AuthorCard";
import CloudTag from "@component/CloudTag";
import Layout from "@component/Layout";
import FormComment from "@form/FormComment";
import ParagraphBottom from "@layout/Blog/ParagraphBottom";
import ParagraphTop from "@layout/Blog/ParagraphTop";
import Recommendation from "@layout/Blog/Recommendation";
import Responses from "@layout/Blog/Responses";
import HeroCenterContent from "@section/HeroCenterContent";
import blogContent from "@thumbnail/content-blog.webp";
import Image from "next/image";

const BlogDetail = () => {
  return (
    <>
      <Layout title={`- Blog Detail | Collosal`}>
        <main>
          <div>
            <HeroCenterContent
              label="read"
              title={"10 Figma Plugins that will increase your productivity"}
              desc={"Month 00 • 0 min read"}
            />
          </div>
        </main>

        <section>
          <Image
            src="/assets/blog-thumbnail/thumbnail-01.webp"
            alt="thumbnail"
            width={100}
            height={100}
            className="w-full h-auto rounded-[5px]"
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

        <div className="px-6 lg:px-64 mt-8 flex gap-5 flex-wrap">
          <CloudTag tag="Figma" />
          <CloudTag tag="UI Design" />
          <CloudTag tag="Curated List" />
        </div>

        <section className="lg:px-64">
          <AuthorCard />
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
