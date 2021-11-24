import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const useArticleByID = (id) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await NewsServiceApi.getArticlesByID(id);
        setArticle(response.data.Article);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { article, error, loading };
};

export default useArticleByID;
