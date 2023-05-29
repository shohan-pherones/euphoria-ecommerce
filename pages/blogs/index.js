import BlogItem from "@/components/BlogItem";
import { getAllBlogs } from "@/prisma/blogs";

const BlogsPage = ({ blogs }) => {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <div className="title flex flex-col items-center justify-center blog-title w-auto h-96 bg-no-repeat bg-cover bg-center">
        <h2 className="uppercase font-extralight text-white text-8xl">
          Our Blog
        </h2>
      </div>

      <div className="grid gap-10">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

export const getServerSideProps = async () => {
  const blogs = await getAllBlogs();

  const updatedBlogs = blogs.map((blog) => ({
    ...blog,
    updatedAt: blog.updatedAt.toString(),
    createdAt: blog.createdAt.toString(),
  }));

  return {
    props: {
      blogs: updatedBlogs,
    },
  };
};
