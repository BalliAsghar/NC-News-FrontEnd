import { useEffect, useState } from "react";
import NewsApiService from "../services/api";

const Headlines = () => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await NewsApiService.getArticles();
      setArticles(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 gap-2">
        {articles.map((article) => {
          return (
            <div
              className="bg-white box-border border p-2 border-gray-900 rounded-xl"
              key={article.article_id}
            >
              <h1 className="Archivo text-2xl">{article.title}</h1>
              <p className="text-xl raleway font-medium">
                author: {article.author}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Headlines;
