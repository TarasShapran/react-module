export default function Comment({comment,infoOfComments}) {
  return (
    <div>
      {comment.id} - {comment.body}
      <button onClick={() =>infoOfComments(comment) }> details</button>

    </div>
  );
}