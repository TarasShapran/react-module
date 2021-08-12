export default function Comment({comment}) {
  return (
    <ul>
        <li>{comment.id} - {comment.name} </li>
    </ul>
  );
}