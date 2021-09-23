/* eslint-disable no-plusplus */
import { useActions } from '../../../../hooks/useAction';
import { IDArr } from '../../../../const/const';
import { useTodosType } from './type';

export const useTodos = (selectedDate: string): useTodosType => {
  const actions = useActions();
  const addTask = (userInput: string): void => {
    if (userInput) {
      const newTask = {
        id: IDArr.length,
        dateTask: selectedDate,
        task: userInput,
        complete: false,
      };
      IDArr.length++;
      actions.addTask({ key: selectedDate, newTask });
    }
  };
  const removeTask = (id: number): void => {
    actions.deleteTask({ key: selectedDate, id });
  };
  const handleToggle = (id: number): void => {
    actions.doneTask({ key: selectedDate, id });
  };
  const updateTask = (id: number, task: string): void => {
    actions.updateTask({ key: selectedDate, id, task });
  };
  return {
    addTask,
    removeTask,
    handleToggle,
    updateTask,
  };
};
