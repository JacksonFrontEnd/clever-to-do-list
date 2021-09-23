import { TaskType } from '../../../utils/types';

export type TaskPropType = {
  todo: TaskType;
  toggleTask: (id:number)=>void;
  removeTask: (id:number)=>void;
updateTask: (id:number, value:string)=>void;
};
