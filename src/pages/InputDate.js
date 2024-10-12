import { useRef, useState } from "react";
import { CalcDate, Convert } from "../utils/date";
import "../assets/css/date.css";

function InputDate() {
    const [startDate, setStartDate] = useState(() => {
        const today = new Date();
        const beforeDate = new Date(today.setDate(today.getDate() - 7))
        return Convert.getDateToStringFormat(beforeDate, 'YYYY-MM-DD');
    });
    const [endDate, setEndDate] = useState(() => {
        const today = new Date();
        return Convert.getDateToStringFormat(today, 'YYYY-MM-DD');
    });

    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleStartButtonClick = () => {
        if ( startDatePickerRef.current ) {
            startDatePickerRef.current.showPicker();
        }
    };

    const handleEndButtonClick = () => {
        if ( endDatePickerRef.current ) {
            endDatePickerRef.current.showPicker();
        }
    };

    const handleConfirmClick = () => {
        console.log("시작일: ", startDate);
        console.log("종료일: ", endDate);

        console.log("시작일: ", startDate.replace(/-/g, ""));
        console.log("종료일: ", endDate.replace(/-/g, ""));
    };

    const handleMonthClick = (month) => {
        const today = new Date();
        setStartDate(Convert.getDateToStringFormat(new Date(today.setMonth(today.getMonth() - month)), 'YYYY-MM-DD'));
        setEndDate(Convert.getDateToStringFormat(new Date(), 'YYYY-MM-DD'));
    };

    const handleResetClick = () => {
        const today = new Date();
        setStartDate(Convert.getDateToStringFormat(new Date(today.setDate(today.getDate() - 7)), 'YYYY-MM-DD'));
        setEndDate(Convert.getDateToStringFormat(new Date(), 'YYYY-MM-DD'));
    };

    const minDate = CalcDate.plusMinusYearFormat(-10, 'YYYY-MM-DD');
    const maxDate = CalcDate.plusMinusYearFormat(10, 'YYYY-MM-DD');

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        ref={startDatePickerRef}
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value) }
                        min={minDate}
                        max={maxDate}
                    />
                    <button
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                        onClick={handleStartButtonClick}
                    >
                        달력
                    </button>
                </div>

                <div style={{ marginLeft: '10px', marginRight: '10px' }}> ~ </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        ref={endDatePickerRef}
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value) }
                        min={minDate}
                        max={maxDate}
                    />
                    <button
                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                        onClick={handleEndButtonClick}
                    >
                        달력
                    </button>
                </div>

                <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                    <button onClick={handleConfirmClick}>콘솔 확인</button>
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <button onClick={() => handleMonthClick(1)}>1개월</button>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <button onClick={() => handleMonthClick(3)}>3개월</button>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <button onClick={() => handleMonthClick(6)}>6개월</button>
                </div>

                <div style={{ marginLeft: '10px' }}>
                    <button onClick={handleResetClick}>초기화</button>
                </div>
            </div>
        </>
    )
}

export default InputDate;