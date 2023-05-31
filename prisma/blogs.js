import prisma from "./prisma";

// Get all blogs
export const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({});
  return blogs;
};
