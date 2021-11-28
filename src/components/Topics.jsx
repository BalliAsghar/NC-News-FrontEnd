import useTopics from "../hooks/useTopics";
import { Link } from "react-router-dom";

const Topics = ({ setTopic }) => {
  const { topics, loading, error } = useTopics();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleTopic = (topic) => setTopic(topic);
  return (
    <div className="flex flex-auto content-center justify-center mt-3 -ml-20 xs:-ml-0">
      {topics.map((topic) => {
        return (
          <div
            key={topic.slug}
            className="raleway mx-1 text-2xl font-semibold bg-white border rounded p-2 text-black hover:bg-gray-700 hover:text-white cursor-pointer"
          >
            <p onClick={() => handleTopic(topic.slug)}>{topic.slug}</p>
          </div>
        );
      })}
      <div
        onClick={() => handleTopic()}
        className="bg-gray-700 raleway mx-1 text-2xl font-semibold text-white border rounded p-2  hover:bg-gray-700 hover:text-white cursor-pointer"
      >
        All Article
      </div>
    </div>
  );
};

export default Topics;
