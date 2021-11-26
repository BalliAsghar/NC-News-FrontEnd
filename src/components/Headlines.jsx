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
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article) => {
            return (
              <div
                class="mx-auto px-4 py-8 max-w-xl my-20"
                key={article.article_id}
              >
                <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                  <div class="md:flex-shrink-0">
                    <img
                      src={article.image_url}
                      alt="mountains"
                      class="w-full h-64 rounded-lg rounded-b-none"
                    />
                  </div>
                  <div class="px-4 py-2 mt-2">
                    <h2 class="font-bold text-2xl text-gray-800 tracking-normal">
                      {article.title}
                    </h2>
                    <p class="text-sm text-gray-700 px-2 mr-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora reiciendis ad architecto at aut placeat quia,
                      minus dolor praesentium officia maxime deserunt porro amet
                      ab debitis deleniti modi soluta similique...
                    </p>
                    <div class="flex items-center justify-between mt-2 mx-6">
                      <a href="#" class="text-blue-500 text-xs -ml-3 ">
                        Show More
                      </a>
                      <a href="#" class="flex text-gray-700">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          class="w-6 h-6 text-blue-500"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                        {article.comment_count}
                      </a>
                    </div>
                    <div class="author flex items-center -ml-3 my-3">
                      <div class="user-logo">
                        <img
                          class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                          src="https://source.unsplash.com/random"
                          alt="avatar"
                        />
                      </div>
                      <h2 class="text-sm tracking-tighter text-gray-900">
                        <a href="#">By {article.author}</a>{" "}
                        <span class="text-gray-600">21 SEP 2015.</span>
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
