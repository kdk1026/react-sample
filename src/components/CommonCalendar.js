import classNames from "classnames";
import style from "../assets/css/calendar.css";
import { useCallback, useState } from "react";
import { Today, Convert, CalcDate } from "../utils/date";

const cx = classNames.bind(style);

// https://eunhee-programming.tistory.com/267
function CommonCalendar(props) {
    const { handleModalClose } = props;

    const now = new Date();

    const today = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        day: now.getDay()
    };

    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const [selectedYear, setSelectedYear] = useState(today.year);
    const [selectedMonth, setSelectedMonth] = useState(today.month);
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

    const [selectedDate, setSelectedDate] = useState("");
    
    const todayStrDate = Today.getTodayString();
    const afterStrDate = CalcDate.plusMinusDay(31);

    const returnWeek = useCallback(() => {
        const weekArr = [];
        week.forEach((v) => {
            weekArr.push(
                <div
                    key={v}
                    className={cx(
                        { weekday: true },
                        { sunday: v === "일" },
                        { saturday: v === "토" }
                    )}
                >
                    {v}
                </div>
            );
        });

        return weekArr;
        // eslint-disable-next-line
    }, []);

    const returnDay = useCallback(() => {
        const dayArr = [];

        for (const nowDay of week) {
            const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();

            if ( week[day] === nowDay ) {
                for (let i = 0; i < dateTotalCount; i++) {
                    const date = new Date(selectedYear, selectedMonth - 1, i + 1);
                    const strDate = Convert.getDateToStringFormat(date, "YYYYMMDD");

                    dayArr.push(
                        <div
                            key={i + 1}
                            className={cx(
                                {
                                    // 오늘 날짜일 때 표시할 스타일
                                    today:
                                        today.year === selectedYear &&
                                        today.month === selectedMonth &&
                                        today.date === i + 1                                          
                                },
                                {
                                    // 전체 날짜 스타일
                                    weekday: true
                                },
                                {
                                    // 전체 일요일 스타일
                                    sunday:
                                        new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 0
                                },
                                {
                                    // 전체 토요일 스타일
                                    saturday:
                                        new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 6
                                },
                                {
                                    // 선택 날짜 스타일
                                    selected:
                                        selectedDate === strDate
                                },
                                {
                                    // 선택 불가 날짜 스타일
                                    impossible:
                                        strDate < todayStrDate || strDate > afterStrDate
                                }
                            )}
                            data-date={strDate}
                            onClick={() => selectDate(strDate, todayStrDate, afterStrDate)}
                        >
                            {i + 1}
                        </div>
                    );
                }
            } else {
                dayArr.push(
                    <div className="weekday"></div>
                );
            }
        }

        return dayArr;
        // eslint-disable-next-line
    }, [selectedYear, selectedMonth, dateTotalCount, selectedDate]);

    const prevMonth = useCallback(() => {
        if ( selectedMonth === 1 ) {
            setSelectedMonth(12);
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }

        setSelectedDate("");
        // eslint-disable-next-line
    }, [selectedMonth]);

    const nextMonth = useCallback(() => {
        if ( selectedMonth === 12 ) {
            setSelectedMonth(1);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }

        setSelectedDate("");
        // eslint-disable-next-line
    }, [selectedMonth]);

    const selectDate = (strDate, todayStrDate, afterStrDate) => {
        if ( strDate < todayStrDate || strDate > afterStrDate ) {
            return false;
        }

        setSelectedDate(strDate);
    };

    return (
        <>
            <div className="container">
                <button onClick={() => handleModalClose()}>닫기</button>
                <div className="title">
                    <h3>
                        {selectedYear}년 {selectedMonth}월
                    </h3>
                    <div className="pagination">
                        <button onClick={prevMonth}>◀︎</button>
                        <button onClick={nextMonth}>▶</button>
                    </div>
                </div>
                <div className="week">{returnWeek()}</div>
                <div className="date">{returnDay()}</div>
                <button onClick={() => handleModalClose()}>취소</button>
                <button onClick={() => handleModalClose(selectedDate)}>적용</button>
            </div>
        </>
    )
}

export default CommonCalendar;