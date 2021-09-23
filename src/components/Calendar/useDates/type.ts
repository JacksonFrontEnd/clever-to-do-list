export type datesType = {
  dates: moment.Moment[];
  prevWeek: () => void;
  nextWeek: () => void;
  selectedDate: moment.Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
};
