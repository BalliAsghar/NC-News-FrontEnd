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
            className="raleway mx-1 text-2xl font-semibold bg-white border rounded p-2 text-black hover:bg-gray-700 hover:text-white"
          >
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
