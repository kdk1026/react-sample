import { useRef } from "react";
import { useState } from "react";
import { Convert } from "../utils/date";
import DatePickerComp from "../components/DatePickerComp";

function ReactDatePicker() {
    const [startDate, setStartDate] = useState(() => {
        const today = new Date();
        const beforeDate = new Date(today.setDate(today.getDate() - 7))
        return beforeDate;
    });
    const [endDate, setEndDate] = useState(new Date());

    const [isStartOpen, setIsStartOpen] = useState(false);
    const [isEndOpen, setIsEndOpen] = useState(false);

    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleStartTodayClick = () => {
        setStartDate(new Date());
        setIsStartOpen(false);
    };

    const handleEndTodayClick = () => {
        setEndDate(new Date());
        setIsEndOpen(false);
    };

    const handleStartButtonClick = () => {
        if ( startDatePickerRef.current ) {
            startDatePickerRef.current.setFocus();
        }
    };

    const handleEndButtonClick = () => {
        if ( endDatePickerRef.current ) {
            endDatePickerRef.current.setFocus();
        }
    };

    const handleConfirmClick = () => {
        console.log("시작일: ", startDate);
        console.log("종료일: ", endDate);

        console.log("시작일: ", Convert.getDateToString(startDate));
        console.log("종료일: ", Convert.getDateToString(endDate));
    };

    const handleMonthClick = (month) => {
        const today = new Date();
        setStartDate(new Date(today.setMonth(today.getMonth() - month)));
        setIsStartOpen(false);

        setEndDate(new Date());
        setIsEndOpen(false);
    };

    const handleResetClick = () => {
        const today = new Date();
        setStartDate(new Date(today.setDate(today.getDate() - 7)));
        setIsStartOpen(false);

        setEndDate(new Date());
        setIsEndOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DatePickerComp
                        defaultDate={startDate}
                        setDefaultDate={setStartDate}
                        handleTodayClick={handleStartTodayClick}
                        isOpen={isStartOpen}
                        setIsOpen={setIsStartOpen}
                        datePickerRef={startDatePickerRef}
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
                    <DatePickerComp
                        defaultDate={endDate}
                        setDefaultDate={setEndDate}
                        handleTodayClick={handleEndTodayClick}
                        isOpen={isEndOpen}
                        setIsOpen={setIsEndOpen}
                        datePickerRef={endDatePickerRef}
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

export default ReactDatePicker;