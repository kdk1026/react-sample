import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Captcha from "../pages/Captcha";
import Pagination from "../pages/Pagination";
import Calendar from "../pages/Calendar ";

function CommonRoute() {
    return (
        <nav>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="captcha" element={<Captcha />} />
                    <Route path="pagination" element={<Pagination />} />
                    <Route path="calendar" element={<Calendar />} />
                </Route>
            </Routes>
        </nav>
    )
}

export default CommonRoute;