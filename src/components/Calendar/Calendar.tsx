import "./calendarStrip.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Task } from "./../ToDo/Task/Task";
import { useDates } from "./useDates";

export const CalendarStrip = () => {
  const { dates, getStars, prevWeek, nextWeek, selectedDate, setSelectedDate } =
    useDates();
  return (
    <div>
      <div className="month-row">
        <FaAngleLeft size={20} className="arrow" onClick={prevWeek} />
        <div>{selectedDate.format("MMMM YYYY")}</div>
        <FaAngleRight size={20} className="arrow" onClick={nextWeek} />
      </div>
      <div className="dates-row">
        {dates.map((date, i) => (
          <div
            className={`day-container ${
              date.isSame(selectedDate, "day") ? "selected" : ""
            }`}
            onClick={() => setSelectedDate(date)}
            key={i}
          >
            <div className="weekday">{date.format("ddd")}</div>
            <div className="date">{date.format("D")}</div>
            <div>{getStars(date)}</div>
          </div>
        ))}
      </div>
      <div className="date-indicator">
        Currently selected date: {selectedDate.format("ll")}
      </div>
      <Task selectedDate={selectedDate.format("ll")} />
    </div>
  );
};