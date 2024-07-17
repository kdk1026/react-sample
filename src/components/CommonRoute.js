import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Captcha from "../pages/Captcha";
import Pagination from "../pages/Pagination";
import Calendar from "../pages/Calendar";
import Map from "../pages/Map";
import SwiperPage from "../pages/SwiperPage";
import ToastPage from "../pages/ToastPage";

function CommonRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="captcha" element={<Captcha />} />
                    <Route path="pagination" element={<Pagination />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="map" element={<Map />} />
                    <Route path="swiper" element={<SwiperPage />} />
                    <Route path="toast" element={<ToastPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default CommonRoute;