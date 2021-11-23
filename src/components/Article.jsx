import { useParams } from "react-router-dom";
const Article = () => {
  const { articleID } = useParams();

  console.log(articleID);

  return <div>Hello</div>;
};

export default Article;
