import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

function ToastPage() {
    const notify = () => {
        toast('toastify test!');
    };

    const success = () => {
        toast.success('toastify success!');
    };

    const error = () => {
        toast.error('toastify error!');
    };

    const warning = () => {
        toast.warning('toastify warning!');
    };

    const title = process.env.REACT_APP_TITLE;

    return (
        <>
            <Helmet>
                <title>{title} | Toast</title>
            </Helmet>

            <button onClick={notify}>Toast 기본</button>
            <button onClick={success}>Toast Success</button>
            <button onClick={error}>Toast Error</button>
            <button onClick={warning}>Toast Warning</button>
        </>
    )
}

export default ToastPage;