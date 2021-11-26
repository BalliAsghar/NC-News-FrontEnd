import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const useAllArticle = (topic, p) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await NewsServiceApi.getArticles(topic, p);
        setArticles(response.data.Articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [topic, p]);

  return { articles, error, loading };
};

export default useAllArticle;
