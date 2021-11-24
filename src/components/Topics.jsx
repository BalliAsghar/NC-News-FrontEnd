import useTopics from "../hooks/useTopics";
import { Link } from "react-router-dom";

const Topics = () => {
  const { topics, loading, error } = useTopics();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-auto content-center justify-center mt-3 -ml-20">
      {topics.map((topic) => {
        return (
          <div
            key={topic.slug}
            className="text-xl p-2 border bg-blue-500 text-white rounded raleway cursor-pointer hover:bg-blue-700 shadow-xl"
          >
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
