const { Link } = require("react-router-dom");

function Header() {
    return (
        <>
          <nav>
            <Link to="/">Home</Link> | <Link to="/captcha">Captcha</Link> |&nbsp;
            <Link to="/pagination">Pagination</Link> | <Link to="/calendar">Calendar</Link> |&nbsp;
            <Link to="/map">Naver Map</Link> | <Link to="/swiper">Swiper</Link>
          </nav>  
        </>
    )
}

export default Header;