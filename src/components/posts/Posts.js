import Post from "../post/Post";

export default function Posts({posts}) {



    return (
        <div>
            <div className="userInfo">
                {posts.map((value) =>
                    <Post
                        post={value}
                        key={value.id}
                    />
                )
                }
            </div>


        </div>

    );
}