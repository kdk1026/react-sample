import "../../assets/css/menu.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
          <nav className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/captcha">Captcha</Link></li>
              <li><Link to="/pagination">Pagination</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/map">Naver Map</Link></li>
              <li><Link to="/swiper">Swiper</Link></li>
              <li><Link to="/toast">Toast</Link></li>
              <li><Link to="/inpput-date">Input Date</Link></li>
              <li><Link to="/datepicker">DatePciker</Link></li>
              <li><Link to="/social-login">소셜 로그인</Link></li>
            </ul>
          </nav>  
        </>
    )
}

export default Header;