import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  comments: number;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, comments, author }) => {
  return (
    <div className="bg-white rounded-t-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 line-clamp-5">{description}</p>
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>{author}</span>
          <span>{comments} Comments</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
