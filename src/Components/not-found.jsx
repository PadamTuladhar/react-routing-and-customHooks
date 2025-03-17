import { Link } from "react-router-dom";

export default function NotFoundComponent() {
    return (
        <>

            <h3>Page not found</h3>
            <Link to={'/recipe'}> Go to recipe</Link>
        </>
    )
}