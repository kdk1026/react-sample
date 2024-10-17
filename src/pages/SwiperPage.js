
import { Helmet } from 'react-helmet-async';
import SwiperComp from '../components/SwiperComp';

function SwiperPage() {
    const slides = Array.from({ length: 5 }).map(
        (el, index) => <img src={`https://picsum.photos/950/250?random=${index + 1}`} alt="Swiper 이미지" />
    );

    const title = process.env.REACT_APP_TITLE;

    return (
        <>
            <Helmet>
                <title>{title} | Swiper</title>
            </Helmet>

            <div>
                <SwiperComp slideContent={slides} isNavi={true} isButton={true} isPagination={true} isScrollbar={true}  />
            </div>
        </>
    )
}

export default SwiperPage;