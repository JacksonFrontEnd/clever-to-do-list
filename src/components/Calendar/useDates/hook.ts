import { useState, useEffect } from "react";
import moment from 'moment';

export const useDates = () => {
	const [dates, setDates] = useState<moment.Moment[]>([]);
	const [startDate, setStartDate] = useState(moment().startOf('week'));
	const [selectedDate, setSelectedDate] = useState(moment());
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
	return {
		dates,
		prevWeek,
		nextWeek,
		selectedDate,
		setSelectedDate,
	}

}