export default function Post({post}) {
    return (
        <div>
            <h2>{post.userId} - {post.id}- {post.title}</h2>

        </div>
    );
}