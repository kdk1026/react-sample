import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Captcha from "../pages/Captcha";
import Pagination from "../pages/Pagination";
import Calendar from "../pages/Calendar";
import Map from "../pages/Map";
import SwiperPage from "../pages/SwiperPage";

function CommonRoute() {
    return (
        <nav>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="captcha" element={<Captcha />} />
                    <Route path="pagination" element={<Pagination />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="map" element={<Map />} />
                    <Route path="swiper" element={<SwiperPage />} />
                </Route>
            </Routes>
        </nav>
    )
}

export default CommonRoute;