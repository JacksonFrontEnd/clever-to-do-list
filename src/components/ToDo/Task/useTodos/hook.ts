import { useActions } from "../../../../hooks/useAction";
import { IDArr } from "../../../../const/const";

export const useTodos = (selectedDate: string) => {
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
    addTask,
    removeTask,
    handleToggle,
    updateTask,
  };
};
