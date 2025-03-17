import useFetch from "./hooks/use-fetch"
import WindowResizeHookComponent from "./hooks/window-resize";

export default function RecipeCompoent() {

    const { data, loading, error } = useFetch('https://dummyjson.com/recipes');
    const windowSize = WindowResizeHookComponent();

    if (loading)
        return <h3>Loading......</h3>
    return (
        <>
            <h1>I am from Recipe component.</h1>
            <div>Window height: {windowSize.height}</div>
            <div>Window width: {windowSize.width}</div>
            <ul>
                {
                    data?.recipes.length > 0 ?
                        data?.recipes.map(item =>
                            <div key={item.id}>
                                <img src={item.image} />
                                <p>{item.name}</p>
                            </div>
                        )
                        : null
                }
            </ul>
        </>
    )
}