import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useArticlesByTopic from "../hooks/useArticlesByTopic";

const ArticlesByTopics = () => {
  const { topic } = useParams();

  const { articles, loading, error } = useArticlesByTopic(topic);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error:</p>;

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default ArticlesByTopics;
