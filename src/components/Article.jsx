import { useParams } from "react-router-dom";
import useArticleByID from "../hooks/useArticleByID";
const Article = () => {
  const { articleID } = useParams();

  const { article, error, loading } = useArticleByID(articleID);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};

export default Article;
