import useFetch from "./hooks/use-fetch";

export default function CommentsComponent() {

    const { data, loading, error } = useFetch('https://dummyjson.com/comments');

    if (loading)
        return <h3>Loading....</h3>

    return (
        <>
            <h1>I am from Comments component.</h1>
            <ul>
                {
                    data?.comments.length > 0 ?
                        data?.comments.map(item =>
                            <div key={item.id}>
                                <p>{item.body}</p>
                                <p>{item.likes}</p>
                            </div>
                        )
                        : null
                }
            </ul>
        </>
    )
}