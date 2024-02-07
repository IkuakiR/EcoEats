import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";

const Datepicker = () => {
    const [selectedDay, setSelectedDay] = useState([]);

    const handleDateChange = (selectedDate: DayValue) => {
        setSelectedDay(selectedDate);
        // 選択された日付の処理をここに追加
        console.log("Selected date:", selectedDate);
    };

    return (
        <Calendar
            value={selectedDay}
            onChange={handleDateChange}
            shouldHighlightWeekends
        />
    );
};

export default Datepicker;
