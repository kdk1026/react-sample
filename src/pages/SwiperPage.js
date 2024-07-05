import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import { useRef } from 'react';

function SwiperPage() {
    const slides = Array.from({ length: 5 }).map(
        (el, index) => <img src={`https://picsum.photos/950/250?random=${index + 1}`} alt="Swiper 이미지" />
    );

    const mySwiper = useRef(null);

    const onPlay = () => {
        mySwiper.current.swiper.autoplay.start();
    };

    const onPause = () => {
        mySwiper.current.swiper.autoplay.stop();
    };

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                ref={mySwiper}
            >
                {
                   slides.map((slideContent, index) => {
                    return (
                    <SwiperSlide key={index} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                    )
                   })
                }
            </Swiper>
            <button onClick={onPlay}>시작</button>
            <button onClick={onPause}>종료</button>
        </>
    )
}

export default SwiperPage;