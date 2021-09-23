/* eslint-disable no-nested-ternary */
import React from 'react';
import { useMySelector } from '../../../hooks/useMySelector';
import { ToDoForm } from '../ToDoForm';
import { ToDo } from '../ToDoHandler';
import { useTodos } from './useTodos';

export const Task = (props: { selectedDate: string }):JSX.Element => {
  const { selectedDate } = props;
  const {
    addTask, removeTask, handleToggle, updateTask,
  } = useTodos(selectedDate);
  const { tasks } = useMySelector((store) => store.taskReducer);
  const targetTaskIndex = tasks.findIndex((x) => x.key === selectedDate);
  const targetTask = tasks[targetTaskIndex];
  return (
    <div className="App">
      <header>
        {targetTaskIndex !== -1 ? (targetTask.todos.length > 0 ? (
          <h1>
            Список задач:
            {targetTask.todos.length}
          </h1>
        ) : null) : (<h1>Нет задач</h1>)}
      </header>
      <ToDoForm edit={false} onSubmit={addTask} />
      {
      targetTaskIndex !== -1 ? targetTask.todos.map((elem) => (
        <ToDo
          todo={elem}
          key={elem.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      )) : null
      }
    </div>
  );
};
