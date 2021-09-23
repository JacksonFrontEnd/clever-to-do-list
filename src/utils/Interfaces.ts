export interface ITaskState {
  id: number;
  task: string;
	complete:boolean;
  dateTask: string;
}
export interface ITaskStore {
  key: string;
  todos: ITaskState[];
}
export interface ITaskNumber {
  date: string;
  num: number;
}

export interface IDoneTask {
  id: number;
  key: string;
}
export interface IDeleteTask {
  key: string;
  id: number;
}

export interface IAddTask {
  key: string;
  newTask: ITaskState;
}

export interface IUpdateTask {
  key: string;
  id: number;
  task: string;
}
