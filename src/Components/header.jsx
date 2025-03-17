import { Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <>
            <div>Home page</div>
            <ul style={{ display: "flex", gap: '20px', listStyle: "none" }}>
                <Link to="/home/recipe">Recipe</Link>
                <Link to="/home/comments">Comments</Link>
            </ul>
        </>
    );
}