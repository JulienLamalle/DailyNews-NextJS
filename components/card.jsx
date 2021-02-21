import React from "react";
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import Link from "next/link";

const Card = ({ data }) => {
  dayjs.locale("fr");

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 overflow-hidden break-all">
      {data &&
        data.stories.map((post) => (
          <div className=" w-full lg:max-w-full lg:flex" key={post.url}>
            {post.media[0] ? (
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${post.media.map(image => image.url)})`}}
              ></div>
            ) : (
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url(/empty.svg)`,
                  border: `0.5px #B0B0B0 solid`,
                }}
              ></div>
            )}
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {post.title}
                </div>
                <p className="text-gray-700 text-base">{post.body.slice(0, 200)}...</p>
              </div>
              <div className="flex items-center">
                <Link href={post.links.permalink}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-3 rounded-full">
                    Voir l'article
                  </button>
                </Link>
                <div className="text-sm">
                  {post.author.name &&
                    <p className="text-gray-900 leading-none">{post.author.name.slice(0, 25)}</p>
                  }
                  <p className="text-gray-600">
                    {dayjs(`${post.published_at}`).format("DD MMMM YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
