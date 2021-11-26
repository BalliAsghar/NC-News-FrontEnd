import { useState, useContext } from "react";
import NewsServiceApi from "../services/api";
import UserContext from "../context/User.Context";
const AddComments = ({ articleId }) => {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
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

  return (
    <div className="flex mx-auto items-center justify-center shadow-lg mb-4 py-2 max-w-lg">
      <form
        className="w-full max-w-xl bg-white px-4 pt-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6" />
        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
          Add a new comment
        </h2>
        <div className="w-full md:w-full px-3 mb-2 mt-2 ">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Type Your Comment"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full flex items-start md:w-full px-3">
          {message && (
            <div className="flex items-start w-1/2 text-green-700 font-semibold px-2 mr-auto">
              {message}
            </div>
          )}
          {!user && (
            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
              <svg
                fill="none"
                className="w-5 h-5 text-gray-600 mr-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs md:text-sm pt-px">You must be logged In</p>
            </div>
          )}
          <div className="-mr-1">
            <input
              type="submit"
              className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
              value="Post Comment"
              disabled={user ? false : true}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddComments;
