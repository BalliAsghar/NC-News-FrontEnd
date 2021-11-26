import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useAllArticles from "../hooks/useAllArticles";
import Topics from "./Topics";
import MainBody from "./MainBody";
import NewsServiceApi from "../services/api";
import UserContext from "../context/User.Context";

const Headlines = () => {
  const [topic, setTopic] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { user } = useContext(UserContext);
  const [likedArticles, setLikedArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await NewsServiceApi.getArticles(topic, page);
        setArticles(response.data.Articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [likedArticles]);

  const handleLike = async (id) => {
    // get liked article by id
    const likedArticle = likedArticles.some(
      (article) => article.article_id === id
    );

    if (likedArticles.length < 1 || !likedArticle) {
      const res = await NewsServiceApi.likeArticle(id);
      // push to likedArticles array
      setLikedArticles([...likedArticles, res.data.Article]);
    }
  };

  const handlePage = () => {
    // if page is 1, don't decrement
    if (page === 1) return;
    setPage(page - 1);
  };

  const changeTopic = (topic) => setTopic(topic);

  if (loading) return <p>Loading...</p>;

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
                <div className="bg-white shadow-lg rounded-lg mb-6 tracking-wide">
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
                    <div className="text-sm text-gray-700 px-2 mr-1">
                      <MainBody id={article.article_id} />
                    </div>
                    <div className="flex items-center justify-between mt-2 mx-6">
                      {user && (
                        <div
                          onClick={() => handleLike(article.article_id)}
                          className="-ml-3 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                        </div>
                      )}
                      <a className="flex text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-red-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {article.votes}
                      </a>
                      <a className="flex text-gray-700">
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
                        <span className="text-blue-500">
                          {" "}
                          - {new Date(article.created_at).toLocaleDateString()}
                        </span>
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
