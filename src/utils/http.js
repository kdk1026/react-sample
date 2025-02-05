import axios from "axios";

const setApiUrl = () => {
    return process.env.REACT_APP_API_URL;
};

const apiUrl = setApiUrl();

const instance = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    timeout: 5000
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        
        if ( error.response?.status === 401 ) {
            const response = await axios.request(error.config);
			return response;
        } else {
            onErrorCase(error);
        }

        return Promise.reject(error);
    }
);

const onErrorCase = (error) => {
    if ( error.code === 'ERR_NETWORK' ) {
        onError(999, `에러가 발생했습니다. ${error.message}`);
    }

    if ( error.code === 'ECONNABORTED' ) {
        onError(998, `요청이 만료되었습니다. ${error.message}`);
    }

    const { status, statusText } = error.response;

	switch (status) {
		case 400:
            alert("잘못된 요청입니다.");
			onError(status, "잘못된 요청입니다.");
			break;
		case 401:
            alert("인증 실패입니다.");
			onError(status, "인증 실패입니다.");
			break;
		case 403:
            alert("권한이 없습니다.");
			onError(status, "권한이 없습니다.");
			break;
		case 404:
            alert("찾을 수 없는 URL 입니다.");
			onError(status, "찾을 수 없는 URL 입니다.");
			break;
		case 500:
            alert("서버에 문제가 발생했습니다.");
			onError(status, "서버에 문제가 발생했습니다.");
			break;
		default:
            alert(`문제가 발생했습니다. ${error.message}`);
			onError(status, `문제가 발생했습니다. ${error.message}`);
	}
};

const onError = (status, message) => {
    const error = { status, message };
    throw error;
};

export default instance;