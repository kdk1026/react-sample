import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout;