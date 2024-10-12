import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { ko } from "date-fns/locale";
import "../assets/css/datepicker.css";

function DatePickerComp(props) {
    const { defaultDate, setDefaultDate, handleTodayClick, isOpen, setIsOpen, datePickerRef } = props;

    return (
        <>
            <DatePicker
                locale={ko}
                selected={defaultDate}
                onChange={(date) => setDefaultDate(date)}
                dateFormat="yyyy-MM-dd"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                yearDropdownItemNumber={21}
                minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 10))}
                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 10))}
                open={isOpen}
                onClickOutside={() => setIsOpen(false)}
                onSelect={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}
                calendarContainer={({ children }) => (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {children}
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '10px' }}>
                            <button onClick={handleTodayClick}>오늘</button>
                            <button onClick={() => setIsOpen(false)}>취소</button>
                        </div>
                    </div>
                )}
                ref={datePickerRef}
                // customInput={<CustomInput />}
            />
        </>
    )
}

// eslint-disable-next-line
const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <input
        value={value}
        onClick={onClick}
        ref={ref}
        style={{ padding: '10px', fontSize: '16px' }}
    />
));

export default DatePickerComp;