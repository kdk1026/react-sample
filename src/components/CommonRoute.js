import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Captcha from "../pages/Captcha";
import Pagination from "../pages/Pagination";
import Calendar from "../pages/Calendar";
import Map from "../pages/Map";
import SwiperPage from "../pages/SwiperPage";
import ToastPage from "../pages/ToastPage";
import Main from "../pages/Main";
import InputDate from "../pages/InputDate";
import ReactDatePicker from "../pages/ReactDatePicker";
import EmptyPage from "../pages/EmptyPage";
import SocialLogin from "../pages/SocialLogin";
import NaverLoginCallback from "../pages/NaverLoginCallback";

function CommonRoute() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Main />} />
                        <Route path="captcha" element={<Captcha />} />
                        <Route path="pagination" element={<Pagination />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="map" element={<Map />} />
                        <Route path="swiper" element={<SwiperPage />} />
                        <Route path="toast" element={<ToastPage />} />
                        <Route path="inpput-date" element={<InputDate />} />
                        <Route path="datepicker" element={<ReactDatePicker />} />
                        <Route path="social-login" element={<SocialLogin />} />
                    </Route>
                    <Route path="/naver-login-callback" element={<NaverLoginCallback />} />
                    <Route path="*" element={<EmptyPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default CommonRoute;