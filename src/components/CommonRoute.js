import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Captcha from "../pages/Captcha";
import Pagination from "../pages/Pagination";

function CommonRoute() {
    return (
        <nav>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="captcha" element={<Captcha />} />
                    <Route path="pagination" element={<Pagination />} />
                </Route>
            </Routes>
        </nav>
    )
}

export default CommonRoute;