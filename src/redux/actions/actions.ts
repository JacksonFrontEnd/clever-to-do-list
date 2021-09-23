import {
  IAddTask,
  IDeleteTask,
  IDoneTask,
  IUpdateTask,
} from '../../utils/Interfaces';
import {
  SET_AUTH_TRUE,
  SET_AUTH_FALSE,
  UPDATE_TASK,
  DELETE_TASK,
  ADD_TASK,
  DONE_TASK,
} from './actionTypes';

function setAuthTrue():{type:string} {
  return {
    type: SET_AUTH_TRUE,
  };
}

function setAuthFalse():{type:string} {
  return {
    type: SET_AUTH_FALSE,
  };
}
function updateTask(obj: IUpdateTask):{type:string, payload: IUpdateTask} {
  return {
    type: UPDATE_TASK,
    payload: obj,
  };
}

function deleteTask(obj: IDeleteTask):{type:string, payload: IDeleteTask} {
  return {
    type: DELETE_TASK,
    payload: obj,
  };
}
function addTask(obj: IAddTask):{type:string, payload: IAddTask} {
  return {
    type: ADD_TASK,
    payload: obj,
  };
}
function doneTask(obj: IDoneTask):{type:string, payload: IDoneTask} {
  return {
    type: DONE_TASK,
    payload: obj,
  };
}
export {
  setAuthTrue,
  setAuthFalse,
  updateTask,
  deleteTask,
  addTask,
  doneTask,
};
