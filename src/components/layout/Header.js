const { Link } = require("react-router-dom");

function Header() {
    return (
        <>
          <nav>
            <Link to="/">Home</Link> | <Link to="/captcha">Captcha</Link> |&nbsp;
            <Link to="/pagination">Pagination</Link>
          </nav>  
        </>
    )
}

export default Header;