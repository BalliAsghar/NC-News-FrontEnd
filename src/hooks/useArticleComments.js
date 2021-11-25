import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const useArticleComments = (article_id, p) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchComments() {
      try {
        const resopnse = await NewsServiceApi.getCommentsByArticleID(
          article_id
        );
        setComments(resopnse.data.comments);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchComments();
  }, [article_id]);

  return { comments, commentsError: error, commentsLoading: loading };
};

export default useArticleComments;
