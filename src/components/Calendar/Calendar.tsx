import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './calendarStrip.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ITaskNumber } from '../../utils/Interfaces';
import { stars } from '../../utils/const';
import { Task } from './../ToDo/Task/Task';

export const CalendarStrip = () => {
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [dates, setDates] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState(moment());
  const [unresolvedTasks, setUnresolvedTasks] = useState<ITaskNumber[]>([]);
  const [resolvedTasks, setResolvedTasks] = useState<ITaskNumber[]>([]);
  useEffect(() => {
    const tempDates = [];
    for (let i = 0; i < 7; i++) {
      tempDates.push(moment(startDate).add(i, 'days'));
    }
    setDates(tempDates);
  }, [startDate]);

  const prevWeek = () => {
    setStartDate(startDate.clone().subtract(7, 'days'));
    setSelectedDate(selectedDate.clone().subtract(7, 'days'));
  }

  const nextWeek = () => {
    setStartDate(startDate.clone().add(7, 'days'));
    setSelectedDate(selectedDate.clone().add(7, 'days'));
  }
  return (
    <div>
      <div className="month-row">
        <FaAngleLeft size={20} className="arrow" onClick={prevWeek} />
        <div>{selectedDate.format('MMMM YYYY')}</div>
        <FaAngleRight size={20} className="arrow" onClick={nextWeek} />
      </div>
      <div className="dates-row">
        {dates.map((date) => (
          <div
            className={`day-container ${date.isSame(selectedDate, 'day') ? 'selected' : ''}`}
            onClick={() => setSelectedDate(date)}
          >
            <div className="weekday">{date.format('ddd')}</div>
            <div className="date">{date.format('D')}</div>
            <div>{date.isSame(selectedDate, 'day') ? stars.join('') : ''}</div>
          </div>
        ))}
      </div>
      <div className="date-indicator">Currently selected date: {selectedDate.format('ll')}</div>
      <Task 
        selectedDate = {selectedDate.format('ll')}
        unresolvedTasks = {unresolvedTasks}
        setUnresolvedTasks = {setUnresolvedTasks}
        resolvedTasks = {resolvedTasks}
        setResolvedTasks = {setResolvedTasks}
      />
    </div>
  )
}
