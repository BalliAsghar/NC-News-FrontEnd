import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const useArticlesByTopic = (topic) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await NewsServiceApi.getArticles(topic);
        setArticles(response.data.Articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  }, [topic]);

  return { articles, error, loading };
};

export default useArticlesByTopic;
