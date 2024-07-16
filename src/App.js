import { BrowserRouter } from "react-router-dom";
import CommonRoute from "./components/CommonRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CommonRoute />
        <ToastContainer
          position="top-center" // 알림 위치 지정
          autoClose={5000}  // 자동 off 시간
          hideProgressBar={false} // 진행시간바 숨김
          closeOnClick={true} // 클릭으로 알람 닫기
          rtl={false} // 알림 좌우 반전
          pauseOnFocusLoss={true} // 화면을 벗어나면 알람 정지
          draggable={false} // 드래그 가능
          pauseOnHover={true} // 마우스를 올리면 알람 정지
          theme="light"
          //limit={1} // 알람 개수 제한
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
