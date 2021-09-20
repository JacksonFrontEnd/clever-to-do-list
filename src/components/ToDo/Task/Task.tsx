import React, { useState } from "react";
import { IDArr, sortTodos } from "../../../utils/const";
import { ITaskNumber, ITaskState } from "../../../utils/Interfaces";
import { TaskType } from "../../../utils/types";
import { newDate } from "../../../utils/utils";
import { ToDoForm } from "../ToDoForm";
import { ToDo } from "../ToDoHandler";

export const Task = (props: {
  selectedDate: string;
  unresolvedTasks: ITaskNumber[];
  setUnresolvedTasks: React.Dispatch<React.SetStateAction<ITaskNumber[]>>;
  resolvedTasks: ITaskNumber[];
  setResolvedTasks: React.Dispatch<React.SetStateAction<ITaskNumber[]>>;
}) => {
  const {
    selectedDate,
    unresolvedTasks,
    setUnresolvedTasks,
    resolvedTasks,
    setResolvedTasks,
  } = props;
  const [todos, setTodos] = useState<ITaskState[]>([]);
  sortTodos.length = 0;
  const addTask = async (userInput: string) => {
    let unresolvedTasksArr: ITaskNumber[] = [];
    if (userInput) {
      const newItem = {
        id: IDArr[0],
        dateTask: selectedDate,
        task: userInput,
        complete: false,
      };
      let id = IDArr.pop() ?? 0;
      IDArr.push(++id);
      setTodos([...todos, newItem]);
      unresolvedTasksArr.concat(unresolvedTasks);
      if (unresolvedTasksArr.length === 0) {
        unresolvedTasksArr.push({
          date: newItem.dateTask,
          num: ++sortTodos.length,
        });
      } else {
        unresolvedTasksArr.forEach((el) => {
          if (el.date.includes(selectedDate)) {
            el.num++;
          }
        });
      }
      setUnresolvedTasks(unresolvedTasksArr);
    }
  };
  const removeTask = (id: number) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    newDate();
  };

  const handleToggle = (id: number) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  const updateTask = (todoId: number, newValue: string) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }
    setTodos(
      [
        ...todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: newValue } : { ...todo }
        ),
      ]
    );
  };
  return (
    <div className="App">
      {todos.map((todo) => {
        if (todo.dateTask.includes(selectedDate)) {
          sortTodos.push(todo);
        }
      })}
      <header>
        {sortTodos.length > 0 ? (
          <h1>Список задач: {sortTodos.length}</h1>
        ) : (
          <h1>Нет задач</h1>
        )}
      </header>
      <ToDoForm edit={false} onSubmit={addTask} />
      {sortTodos.map((elem) => {
        return (
          <ToDo
            todo={elem}
            key={elem.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
};
