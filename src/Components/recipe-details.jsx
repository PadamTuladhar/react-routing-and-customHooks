import { useLocation, useParams } from "react-router-dom"

export default function RecipeDetails() {
    const params = useParams();
    const location = useLocation();

    const { id } = params;
    const { pathname } = location;

    return (
        <>
            <div> Recipe details {id}</div>
        </>
    )
}