import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 pb-16"> {/* extra padding to prevent overlap */}
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            post.category === 'Tech' ? 'bg-blue-100 text-blue-800' :
            post.category === 'Travel' ? 'bg-green-100 text-green-800' :
            'bg-orange-100 text-orange-800'
          }`}>
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {post.description}
        </p>
      </div>

      {/* Absolute bottom section: date and read more */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {formatDate(post.date)}
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
          Read more →
        </button>
      </div>
    </article>
  );
};

export default PostCard;
