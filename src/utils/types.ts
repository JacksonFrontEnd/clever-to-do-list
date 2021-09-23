import {
  SET_AUTH_TRUE, SET_AUTH_FALSE, UPDATE_TASK, DELETE_TASK, ADD_TASK, DONE_TASK,
} from '../redux/actions/actionTypes';
import {
  IUpdateTask, IDeleteTask, IAddTask, IDoneTask,
} from './Interfaces';

export type TaskType = {
  id: number;
  dateTask: string;
  task:string,
complete:boolean
};
export type TaskNumberType = {
  date: string;
  num: number;
}
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
      type: typeof DONE_TASK;
      payload: IDoneTask;
    };
