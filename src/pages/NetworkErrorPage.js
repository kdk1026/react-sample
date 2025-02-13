import { Link } from "react-router-dom";

function NetworkErrorPage() {
    return (
        <>
            <h2 style={{ color: '#ff6f61', fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '20px' }}>Network Error</h2>
            <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none', color: '#ffffff', backgroundColor: '#ff6f61', padding: '10px 20px', borderRadius: '5px', fontFamily: 'Arial, sans-serif' }}>돌아가기</Link>
        </>
    )
}

export default NetworkErrorPage;