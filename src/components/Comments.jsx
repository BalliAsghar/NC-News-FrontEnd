const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div
            key={comment.comment_id}
            class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
          >
            <strong>{comment.author}</strong>{" "}
            <span class="text-xs text-blue-700">
              {new Date(comment.created_at).toLocaleDateString()}
            </span>
            <p class="text-sm">{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
