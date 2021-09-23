import { useMySelector } from "../../../hooks/useMySelector";
import { sortTodos } from "../../../utils/const";
import { ToDoForm } from "../ToDoForm";
import { ToDo } from "../ToDoHandler";
import { useTodos } from "./useTodos";

export const Task = (props: { selectedDate: string }) => {
  const { selectedDate } = props;
  const { addTask, removeTask, handleToggle, updateTask } =
    useTodos(selectedDate);
  const { tasks } = useMySelector(store=> store.taskReducer);
  const targetTaskIndex = tasks.findIndex((x) => x.key === selectedDate);
  const targetTask = tasks[targetTaskIndex];
  return (
    <div className="App">
      <header>
        {sortTodos.length > 0 ? (
          <h1>Список задач: {sortTodos.length}</h1>
        ) : (
          <h1>Нет задач</h1>
        )}
      </header>
      <ToDoForm edit={false} onSubmit={addTask} />
      {
      targetTaskIndex !== -1 ? targetTask.todos.map((elem) => {
        return (
          <ToDo
            todo={elem}
            key={elem.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        );
      }) : null
      }
    </div>
  );
};
