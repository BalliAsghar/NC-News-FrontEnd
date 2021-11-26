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
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 gap-2">
          {articles.map((article) => {
            return (
              <div
                className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
                key={article.article_id}
              >
                <h1 className="Archivo text-2xl">
                  <Link to={`/article/${article.article_id}`}>
                    {article.title}
                  </Link>
                </h1>
                <p className="text-xl raleway font-medium">
                  author: {article.author}
                </p>
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
