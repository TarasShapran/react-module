export default function Post({post , infoOfPost}) {
  return (
    <div>
      {post.id} - {post.title}
      <button onClick={() =>infoOfPost(post) }> details</button>
    </div>
  );
}

