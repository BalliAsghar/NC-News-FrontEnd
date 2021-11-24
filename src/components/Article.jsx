import { useParams } from "react-router-dom";
import useArticleByID from "../hooks/useArticleByID";
const Article = () => {
  const { articleID } = useParams();

  const { article, loading } = useArticleByID(articleID);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{console.log(article)}</div>;
};

export default Article;
