import { useState } from "react";
import CommonCalendar from "../components/CommonCalendar";
import Modal from "react-modal";

function Calendar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    const customModalStyles = {
        overlay: {
            backgroundColor: " rgba(0, 0, 0, 0.4)",
            width: "100%",
            height: "100vh",
            zIndex: "10",
            position: "fixed",
            top: "0",
            left: "0",
          },
          content: {
            width: "550px",
            height: "450px",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            overflow: "auto",
          }, 
    };

    const handleModalClose = (strDate) => {
        setModalIsOpen(false);
        setSelectedDate(strDate);
    };

    return (
        <>
            <button onClick={() => setModalIsOpen(true)}>달력 Modal Open</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customModalStyles}>
                <CommonCalendar handleModalClose={handleModalClose} />
            </Modal>

            {
                selectedDate ? <div>선택한 날짜 : {selectedDate}</div> : ""
            }
        </>
    )
}

export default Calendar;