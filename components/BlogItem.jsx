import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import moment from "moment";

const BlogItem = ({ blog }) => {
  return (
    <div className="overflow-hidden hover:text-white hover:bg-red-600 border-t border-red-600 duration-300">
      <div className="flex gap-5 w-full duration-300">
        <div className="w-[30rem] flex items-center rounded-md p-5 lg:h-[24rem]">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={640}
            height={360}
            priority
            className="w-full h-full object-fill"
          />
        </div>

        <div className="flex flex-col w-4/5 mx-10 justify-between py-10 text-red-600 lg:h-[24rem]  hover:text-white gap-2">
          <div className="flex gap-5">
            <span className="font-semibold">{blog.tags}</span>
            <span className="font-normal text-base">
              Post on: {moment(blog.createdAt).format("DD MMM YY. hh:mm A")}
            </span>
          </div>
          <h3 className="text-6xl font-ligh overflow-hidden">{blog.title}</h3>
          <p>{blog.author}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
