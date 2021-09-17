import React from "react";
import { year, month, currentDate, ROWS, COLS, weekDays } from "../utils/const";

export default function CalendarFC() {
  let table = [],
    tr = [];
  let curr = new Date(year, month);
  let next = new Date(year, month + 1);
  let diff = (Number(next) - Number(curr)) / (1000 * 3600 * 24);
  let index = (currentDate.getDay() + 6) % 7;
  let k = 1 - index;
	for (let i = 0; i < COLS; i++) {
		tr.push(<th scope="col">{weekDays[i]}</th>);
	}
	table.push(<tr>{tr}</tr>);
  for (let i = 0; i < ROWS; i++) {
    tr = [];
    for (let j = 0; j < COLS; j++) {
      tr.push(<td>{k > 0 && k <= diff ? k : ""}</td>);
      k++;
    }
    table.push(<tr>{tr}</tr>);
  }
  return table;
}
