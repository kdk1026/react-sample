import { useEffect } from "react";
import { loginWithNaverCallBack } from "../utils/socialLogin";

function NaverLoginCallback() {
    useEffect(() => {
        const naverLogin = loginWithNaverCallBack(process.env.REACT_APP_NAVER_CLIENT_ID, `${process.env.REACT_APP_FRONT_URL}/naver-login-callback`);

        window.addEventListener('load', function () {
            naverLogin.getLoginStatus(function (status) {
                if (status) {
                    // 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크
                    const email = naverLogin.user.getEmail();

                    const profileObj = {};
                    profileObj.email = email;

                    window.opener.postMessage(profileObj, window.location.origin);
                    window.close();
                } else {
                    console.log("callback 처리에 실패하였습니다.");
                }
            });
        });
    }, []);

    return (
        <>
        </>
    )
}

export default NaverLoginCallback;