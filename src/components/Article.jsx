import { useParams } from "react-router-dom";
import useArticleByID from "../hooks/useArticleByID";
import useArticleComments from "../hooks/useArticleComments";
import Comments from "./Comments";

const Article = () => {
  const { articleID } = useParams();

  const { article, error, loading } = useArticleByID(articleID);
  const { comments, commentsError, commentsloading } =
    useArticleComments(articleID);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div className="m-2 p-2 mt-14">
      <h1 className="font-mono text-3xl font-extrabold text-blue-600">
        {article.title}
      </h1>
      <p className="font-sans text-2xl">{article.body}</p>
      <div className="mt-2 font-serif text-2xl font-bold text-purple-700">
        {article.author}
      </div>
      - {new Date(article.created_at).toLocaleDateString()}
      <h2 className="text-gray-700 font-bold mt-14 text-2xl font-mono">
        Comments
      </h2>
      {!commentsloading ? <Comments comments={comments} /> : "Loading"}
    </div>
  );
};

export default Article;
