import "../../assets/css/menu.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/captcha">Captcha</Link>
            <Link to="/pagination">Pagination</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/map">Naver Map</Link>
            <Link to="/swiper">Swiper</Link>
            <Link to="/toast">Toast</Link>
            <Link to="/inpput-date">Input Date</Link>
            <Link to="/datepicker">DatePciker</Link>
          </nav>  
        </>
    )
}

export default Header;