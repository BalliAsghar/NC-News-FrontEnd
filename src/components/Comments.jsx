import { useEffect, useState, useContext } from "react";
import NewsServiceApi from "../services/api";
import UserContext from "../context/User.Context";
const Comments = ({ articleId }) => {
  if (!articleId) return null;

  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [commentRemoved, setcommentRemoved] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchComments() {
      const response = await NewsServiceApi.getCommentsByArticleID(articleId);
      setComments(response.data.comments);
      setLoading(false);
    }
    fetchComments();
  }, [commentRemoved]);

  const loadMoreComments = async () => {
    try {
      const response = await NewsServiceApi.getCommentsByArticleID(
        articleId,
        page + 1
      );
      if (response.data.comments.length === 0) return;
      setComments(comments.concat(response.data.comments));
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (commentId) => {
    try {
      const response = await NewsServiceApi.likeComment(commentId);
      setComments(
        comments.map((comment) =>
          comment.comment_id === commentId ? response.data.comment : comment
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const HandleDelete = async (id, author) => {
    if (author !== user.user.username) return;

    try {
      await NewsServiceApi.deleteComment(id);
      setcommentRemoved((prev) => !prev);
    } catch (error) {}
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-flow-row gap-2">
      {comments.map((singleComment) => {
        return (
          <div
            key={singleComment.comment_id}
            className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
          >
            <strong>{singleComment.author}</strong>{" "}
            <span className="text-xs text-blue-700">
              {new Date(singleComment.created_at).toLocaleDateString()}
            </span>
            <p className="text-sm">{singleComment.body}</p>
            <p className="text-sm font-sans text-blue-700 font-bold">
              Likes:{" "}
              <span className="text-green-600">{singleComment.votes}</span>
            </p>
            <div className="flex gap-1">
              <button onClick={() => handleLike(singleComment.comment_id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer"
                onClick={() =>
                  HandleDelete(singleComment.comment_id, singleComment.author)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
      <div
        onClick={loadMoreComments}
        className="flex flex-auto content-center justify-center text-blue-800 cursor-pointer"
      >
        Load more Comments
      </div>
    </div>
  );
};

export default Comments;
