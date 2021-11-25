import { useEffect, useState } from "react";
import NewsServiceApi from "../services/api";

const Comments = ({ articleId }) => {
  if (!articleId) return null;

  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchComments() {
      const response = await NewsServiceApi.getCommentsByArticleID(articleId);
      setComments(response.data.comments);
      setLoading(false);
    }
    fetchComments();
  }, []);

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

  if (loading) return <p>Loading...</p>;

  return (
    <div>
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
            <p
              className="cursor-pointer"
              onClick={() => handleLike(singleComment.comment_id)}
            >
              👍🏿
            </p>
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
