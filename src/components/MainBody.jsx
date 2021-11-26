import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const MainBody = ({ id }) => {
  const [body, setBody] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      try {
        const response = await NewsServiceApi.getArticlesByID(id);
        setBody(response.data.Article.body);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div onClick={() => setShowMore(!showMore)} className="cursor-pointer">
      {showMore ? body : body.slice(0, 200) + "..."}
    </div>
  );
};

export default MainBody;
