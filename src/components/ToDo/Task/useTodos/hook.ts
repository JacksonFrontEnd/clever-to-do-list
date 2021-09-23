import { useState } from "react";
import { useActions } from "../../../../hooks/useAction";
import { IDArr, sortTodos } from "../../../../utils/const";
import { ITaskState } from "../../../../utils/Interfaces";

export const useTodos = (selectedDate: string) => {
  const [todos, setTodos] = useState<ITaskState[]>([]);
  const actions = useActions();
  const addTask = (userInput: string) => {
    if (userInput) {
      const newTask = {
        id: IDArr.length,
        dateTask: selectedDate,
        task: userInput,
        complete: false,
      };
      IDArr.length++;
      actions.addTask({ key: selectedDate, newTask: newTask });
    }
  };
  const removeTask = (id: number) => {
    actions.deleteTask({ key: selectedDate, id: id });
  };
  const handleToggle = (id: number) => {
    actions.doneTask({ key: selectedDate, id: id });
  };
  const updateTask = (id: number, task: string) => {
    actions.updateTask({ key: selectedDate, id: id, task: task});
  };
  return {
    todos,
    addTask,
    removeTask,
    handleToggle,
    updateTask,
  };
};
