import { useEffect, useRef, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

function SwiperComp(props) {
    const { slideContent, isNavi, isButton, isPagination, isScrollbar } = props;

    const mySwiper = useRef(null);
    const closeButtonRef = useRef(null);

    const [isPlay, setIsPlay] = useState(true);

    const handlePlay = () => {
        isPlay ? mySwiper.current.swiper.autoplay.stop() : mySwiper.current.swiper.autoplay.start();
        setIsPlay(!isPlay);
    };

    useEffect(() => {
        const pagination = document.querySelector('.swiper-pagination');
        if (pagination && closeButtonRef.current) {
            pagination.appendChild(closeButtonRef.current);
        }
    }, [isPlay]);

    return (
        <>
            {
                isButton &&
                <button ref={closeButtonRef} onClick={handlePlay}>{isPlay ? '종료' : '시작'}</button>
            }
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={ isNavi }
                pagination={ isPagination ? { clickable: true } : false }
                scrollbar={ isScrollbar ? { draggable: true } : false }
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                ref={mySwiper}
            >
                {
                    slideContent.map((slides, index) => {
                        return (
                        <SwiperSlide key={index} virtualIndex={index}>
                            {slides}
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default SwiperComp;