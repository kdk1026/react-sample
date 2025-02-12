import { Link } from "react-router-dom";

function EmptyPage() {
    return (
        <>
            <h2
                style={{ 
                    color: '#ff0000', 
                    textAlign: 'center', 
                    fontSize: '24px', 
                    marginTop: '20px'
                }
            }>잘못된 접근입니다.</h2>
            <Link 
                to="/" 
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '10px 0',
                    marginTop: '20px',
                    textAlign: 'center',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    boxSizing: 'border-box'
                }}
            >
                돌아가기
            </Link>
        </>
    )
}

export default EmptyPage;