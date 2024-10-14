export const loginWithNaver = (ClientId, CallBackUrl) => {
    const { naver } = window;

    const naverLogin = new naver.LoginWithNaverId(
        {
            clientId: ClientId,
            callbackUrl: CallBackUrl,
            isPopup: true, /* 팝업을 통한 연동처리 여부 */
            loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
        }
    );

    /* 설정정보를 초기화하고 연동을 준비 */
    naverLogin.init();
};

export const loginWithNaverCallBack = (ClientId, CallBackUrl) => {
    const { naver } = window;

    const naverLogin = new naver.LoginWithNaverId(
        {
            clientId: ClientId,
            callbackUrl: CallBackUrl,
            isPopup: true,
            callbackHandle: true
            /* callback 페이지가 분리되었을 경우에 callback 페이지에서는 callback처리를 해줄수 있도록 설정합니다. */
        }
    );

    /* 네아로 로그인 정보를 초기화하기 위하여 init을 호출 */
    naverLogin.init();

    return naverLogin;
};

export const loginWithKakao = (userMeSucCallBack, userMeFailCallBak, loginFailCallBack) => {
    const { Kakao } = window;

    Kakao.Auth.login({
        success: function (response) {
            // console.log('login response : ', response);

            const _accessToken = response.access_token;

            // 토큰 할당
            Kakao.Auth.setAccessToken(_accessToken);

            // 사용자 정보 가져오기
            Kakao.API.request({
                url: '/v2/user/me',
                success: function (response) {
                    // console.log('/v2/user/me : ', response);
                    userMeSucCallBack(response);
                },
                fail: function (error) {
                    // console.log('/v2/user/me :', error);
                    userMeFailCallBak(error);
                }
            });
        },
        fail: function (error) {
            // console.log('login fail : ', error);
            loginFailCallBack(error);
        }
    });
};

/**
 * 발급된 토큰을 만료시키므로 토큰으로 후작업 해야 하는 경우에는 하지말 것
 * @param {Function} logoutCallBack 
 * @returns 
 */
export const logoutWithKakao = (logoutCallBack) => {
    const { Kakao } = window;

    if (!Kakao.Auth.getAccessToken()) {
        console.log('Not logged in.');
        return;
    }

    // console.log('before logout : ', Kakao.Auth.getAccessToken());

    Kakao.Auth.logout(function() {
        // console.log('after logout : ', Kakao.Auth.getAccessToken());
        logoutCallBack( Kakao.Auth.getAccessToken() );
    });
};