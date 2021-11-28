import { useState, useContext, useEffect } from "react";
import NewsServiceApi from "../services/api";
import UserContext from "../context/User.Context";
const AddComments = ({ articleId }) => {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {}, [setComment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await NewsServiceApi.postCommentOnArticle(
        articleId,
        user.user.username,
        comment
      );
      setComment("");
      setMessage("Comment Posted");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) return null;

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 bg-white p-2 pt-4 rounded shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex ml-3">
            <div className="mr-3">
              <img
                src={user.user.avatar_url}
                width="50px"
                height="50px"
                alt=""
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="font-semibold">{user.user.username}</h1>
              <p className="text-xs text-gray-500">{user.user.name}</p>
            </div>
          </div>

          <div className="mt-3 p-3 w-full">
            <textarea
              rows="3"
              className="border p-2 rounded w-full"
              placeholder="Write something..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-between mx-3 gap-2">
            <div>
              <button
                type="submit"
                disabled={!comment}
                className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700"
              >
                Submit
              </button>
            </div>
            {message && <div className="text-xl text-green-900">{message}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComments;
