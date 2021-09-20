import { ITaskNumber } from "../../../utils/Interfaces";

export type TaskType = {
  selectedDate: string;
  unresolvedTasks: ITaskNumber[];
  setUnresolvedTasks: React.Dispatch<React.SetStateAction<ITaskNumber[]>>;
  resolvedTasks: ITaskNumber[];
  setResolvedTasks: React.Dispatch<React.SetStateAction<ITaskNumber[]>>;
}