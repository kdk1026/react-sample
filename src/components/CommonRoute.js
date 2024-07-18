import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Captcha from "../pages/Captcha";
import Pagination from "../pages/Pagination";
import Calendar from "../pages/Calendar";
import Map from "../pages/Map";
import SwiperPage from "../pages/SwiperPage";
import ToastPage from "../pages/ToastPage";
import Main from "../pages/Main";

function CommonRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/captcha" element={<Captcha />} />
                        <Route path="/pagination" element={<Pagination />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/swiper" element={<SwiperPage />} />
                        <Route path="/toast" element={<ToastPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default CommonRoute;