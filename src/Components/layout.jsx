import { Outlet } from "react-router-dom";
import HeaderComponent from "./header";

export default function LayoutComponent() {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}