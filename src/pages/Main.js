import { Helmet } from "react-helmet-async";

function Main() {
    const title = process.env.REACT_APP_TITLE;

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h2>메인</h2>
        </>
    )
}

export default Main;