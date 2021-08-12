import Post from '../post/Post';

export default function Posts({item}) {

    return (
        <div>
            {
                item.map(value => (
                        <Post item={value} key={value.id} />
                    )
                )
            }

        </div>
    );
}