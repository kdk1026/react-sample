import { useEffect, useState } from "react";
import { loginWithKakao, loginWithNaver, logoutWithKakao } from "../utils/socialLogin";

function SocialLogin() {
    const [naverUser, setNaverUser] = useState({});

    const handleMessage = (event) => {
        if ( event.origin !== window.location.origin ) {
            return;
        }
    
        const naverUser = event.data;
        setNaverUser(naverUser);
    };

    const handleNaverLoginClick = (e) => {
        e.preventDefault();
        document.querySelector('#naverIdLogin').firstChild.click();
    };

    const handleKakaoLoginClick = (e) => {
        e.preventDefault();
        loginWithKakao(kakaoUserMeSucCallBack, kakaoUserMeFailCallBak, kakaoLoginFailCallBack);
    };

    useEffect(() => {
        window.addEventListener('message', handleMessage);
        
        loginWithNaver(process.env.REACT_APP_NAVER_CLIENT_ID, `${process.env.REACT_APP_FRONT_URL}/naver-login-callback`);

        if ( !window.Kakao.isInitialized() ) {
            window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
        }
    }, []);

    useEffect(() => {
        if ( naverUser.email ) {
            alert(naverUser.email);
        }
    }, [naverUser]);

    const kakaoUserMeSucCallBack = (obj) => {
        const email = obj.kakao_account.email;
        alert(email);
        
        logoutWithKakao(kakaoLogoutCallBack);
    };

    const kakaoUserMeFailCallBak = (obj) => {
        console.log(obj);
    };

    const kakaoLoginFailCallBack = (obj) => {
        console.error(obj);
        alert('카카오 로그인에 실패했습니다.\n잠시 후 다시 시도해주세요.\n지속적인 오류 발생 시 관리자에게 문의바랍니다.');
    };

    const kakaoLogoutCallBack = (accessToken) => {
        console.log('Kakao User signed out.');
    };

    return (
        <>
            <div>
                <button onClick={handleNaverLoginClick}>네이버 로그인</button>
                <div id="naverIdLogin" style={{ display: 'none' }}></div>
            </div>
            <div>
                <button onClick={handleKakaoLoginClick}>카카오 로그인</button>
            </div>
        </>
    )
}

export default SocialLogin;