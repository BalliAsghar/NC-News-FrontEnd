import { useState } from "react";
import { Link } from "react-router-dom";
import useAllArticles from "../hooks/useAllArticles";
import Topics from "./Topics";

const Headlines = () => {
  const [topic, setTopic] = useState();
  const [page, setPage] = useState(1);
  const { articles, error, loading } = useAllArticles(topic, page);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handlePage = () => {
    // if page is 1, don't decrement
    if (page === 1) return;
    setPage(page - 1);
  };

  const changeTopic = (topic) => setTopic(topic);

  return (
    <div>
      {<Topics setTopic={changeTopic} />}
      <div className="container mx-auto my-auto">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => {
            return (
              <div
                className="mx-auto px-4 py-8 max-w-xl my-3"
                key={article.article_id}
              >
                <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                  <div className="md:flex-shrink-0">
                    <img
                      src={article.image_url}
                      alt="mountains"
                      className="w-full h-64 rounded-lg rounded-b-none"
                    />
                  </div>
                  <div className="px-4 py-2 mt-2">
                    <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-700 px-2 mr-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora reiciendis ad architecto at aut placeat quia,
                      minus dolor praesentium officia maxime deserunt porro amet
                      ab debitis deleniti modi soluta similique...
                    </p>
                    <div className="flex items-center justify-between mt-2 mx-6">
                      <a href="#" className="text-blue-500 text-xs -ml-3 ">
                        Show More
                      </a>
                      <a href="#" className="flex text-gray-700">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-blue-500"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                        {article.comment_count}
                      </a>
                    </div>
                    <div className="author flex items-center -ml-3 my-3">
                      <div className="user-logo">
                        <img
                          className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                          src="https://source.unsplash.com/random"
                          alt="avatar"
                        />
                      </div>
                      <h2 className="text-sm tracking-tighter text-gray-900">
                        <a href="#">By {article.author}</a>{" "}
                        <span className="text-gray-600">21 SEP 2015.</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex content-center justify-center">
        <button
          onClick={handlePage}
          className="text-blue-800 cursor-pointer pr-3"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((page) => page + 1)}
          className="text-blue-800 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Headlines;
