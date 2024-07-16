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

    return (
        <>
            <button onClick={notify}>Toast 기본</button>
            <button onClick={success}>Toast Success</button>
            <button onClick={error}>Toast Error</button>
        </>
    )
}

export default ToastPage;