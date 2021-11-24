import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const useTopics = () => {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await NewsServiceApi.getTopics();
        setTopics(response.data.topics);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { topics, loading, error };
};
export default useTopics;
