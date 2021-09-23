import {
  SET_AUTH_TRUE,
  SET_AUTH_FALSE,
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  GET_TASKS,
  UPDATE_TASK,
} from "../redux/actions/actionTypes";
import { TaskType } from "./types";
import { IUpdateTask, IDeleteTask, IAddTask, IDoneTask, IGetTask } from "./Interfaces";

export const LOGIN_ROUTE = "/login";
export const CALENDAR_ROUTE = "/chat";
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const currentDate = new Date();
export const year = currentDate.getFullYear();
export const month = currentDate.getMonth();
export const ROWS = 6;
export const COLS = 7;
export const IDArr = [0];
export const stars = [""];
export const sortTodos: TaskType[] = [];

export type AuthActionType =
  | {
      type: typeof SET_AUTH_TRUE;
    }
  | {
      type: typeof SET_AUTH_FALSE;
    };
export type TaskActionType =
  | {
      type: typeof UPDATE_TASK;
      payload: IUpdateTask;
    }
  | {
      type: typeof DELETE_TASK;
      payload: IDeleteTask;
    }
  | {
      type: typeof ADD_TASK;
      payload: IAddTask;
    }
  | {
      type: typeof GET_TASKS;
      payload: IGetTask;
    }
  | {
      type: typeof DONE_TASK;
      payload: IDoneTask;
    };
