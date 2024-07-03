import { useEffect, useState } from "react";
import CommonCaptcha from "../components/CommonCaptcha";

function Captcha() {
    const [imageData, setImageData] = useState(null);
    const [rand, setRand] = useState(String(Math.floor(Math.random()*1000000)).padStart(6, "0"));

    useEffect(() => {
        setImageData(`${process.env.REACT_APP_API_URL}/captcha-img/${rand}`);
    }, [rand]);

    const handleListen = () => {
        const url = `${process.env.REACT_APP_API_URL}/captcha-audio/${rand}`;
        new Audio(url).play();
    };

    const handleRefresh = () => {
        const rand = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
        setRand(rand);
    };

    return (
        <> 
            <CommonCaptcha
                imageData={imageData}
                handleListen={handleListen}
                handleRefresh={handleRefresh}
            />
        </>
    )
}

export default Captcha;