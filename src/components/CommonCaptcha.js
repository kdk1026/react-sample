function CommonCaptcha(props) {
    const { imageData, handleListen, handleRefresh } = props;

    return (
        <> 
            <div>
                <div>
                    <img src={imageData} alt="Captcha" />
                    <div id="captchaAudio" style={{display: 'none'}}></div>
                </div>
                <div>
                    <button onClick={handleListen}>음성듣기</button>
                    <button onClick={handleRefresh}>새로고침</button>
                </div>
            </div>
        </>
    )
}

export default CommonCaptcha;