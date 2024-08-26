import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, tags }) => {
  return (
    <div className="mr-4">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black-100 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-200 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-white-200 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-white-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-black-200 py-6 px-4 mb-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-white-300 text-justify">{description}</p>
        <div className="mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
