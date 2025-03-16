import React from "react";
import { BASE_URL } from "../../../constants/constants";

const Card = ({ blog }) => {
  return (
    <div
      className="cursor-pointer shadow-md hover:opacity-100 opacity-90 hover:scale-102 rounded-xl overflow-hidden hover:shadow-lg tranition-all duration-300"
      id={blog._id}
    >
      <div>
        <img
          className="w-full object-cover aspect-square"
          src={`${BASE_URL}${blog.image}`}
          alt={blog.title}
        />
        <div className="p-3 flex flex-col gap-2 text-center">
          <p className="text-blue-900 uppercase tracking-wide text-[14px]">
            {blog.category.title}
          </p>
          <p className="text-[28px] font-semibold font-serif">{blog.title}</p>
          <div className="items-center justify-between">
            <p className="text-gray-800 font-semibold text-lg text-[24px]">
              {blog.author?.name}
            </p>
          </div>

          <p className="text-[14px] text-gray-700">
            {blog.description.slice(0, 80)}...
          </p>
          <p>{blog.createdAt ? blog.createdAt : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
