const LOGIN_ROUTE = '/login';
const CALENDAR_ROUTE = '/calendar';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const IDArr = [0];

export {
  LOGIN_ROUTE,
  CALENDAR_ROUTE,
  months,
  weekDays,
  currentDate,
  year,
  month,
  IDArr,
};
