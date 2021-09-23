import { useActions } from "../../../hooks/useAction";
import { sortTodos } from "../../../utils/const";
import { ToDoForm } from "../ToDoForm";
import { ToDo } from "../ToDoHandler";
import { useTodos } from "./useTodos";

export const Task = (props: { selectedDate: string }) => {
  const { selectedDate } = props;
  const { addTask, removeTask, handleToggle, updateTask } =
    useTodos(selectedDate);
  const action = useActions();
  action.getTasks({key: selectedDate});
  alert(sortTodos);
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
      sortTodos.map((elem) => {
        return (
          <ToDo
            todo={elem}
            key={elem.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        );
      })
      }
    </div>
  );
};
