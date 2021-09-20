import { TaskType } from "../../../utils/types";

export type TaskPropType = {
  todo: TaskType;
  toggleTask: Function;
  removeTask: Function;
	updateTask:Function;
};
