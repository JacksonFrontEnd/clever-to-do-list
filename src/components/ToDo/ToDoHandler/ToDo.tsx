import { TaskPropType } from "./types";
import SettingsIcon from "@material-ui/icons/Settings";
import "./ToDo.scss";
import { useState } from "react";
import { ToDoForm } from "../ToDoForm";
import { ITaskState } from "../../../utils/Interfaces";

export const ToDo = (props: TaskPropType) => {
  const [edit, setEdit] = useState<ITaskState>({
    id: -1,
    task: "",
    complete: false,
    dateTask: "",
  });
  const { todo, toggleTask, removeTask, updateTask } = props;
  const submitUpdate = (value: string) => {
    updateTask(edit?.id, value);
    setEdit({
      id: -1,
      task: "",
      complete: false,
      dateTask: "",
    });
  };

  if (edit?.id !== -1) {
    return (
      <>
        <div key={todo.id} className="item-todo flex">
          <div className="flex-row">
            <div
              className={todo.complete ? "item-text strike" : "item-text"}
            >{`Task title: ${todo.task}`}</div>
            <div>{`Date of create: ${todo.dateTask}`}</div>
          </div>
          <div className="flex-row">
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
              X
            </div>
            <div onClick={() => toggleTask(todo.id)}>
              <input type="checkbox" />
            </div>
            <SettingsIcon
              onClick={() =>
                setEdit({
                  id: todo.id,
                  task: todo.task,
                  complete: todo.complete,
                  dateTask: todo.dateTask,
                })
              }
            />
          </div>
        </div>
        <ToDoForm edit={true} onSubmit={submitUpdate} />
      </>
    );
  }
  return (
    <div key={todo.id} className="item-todo flex">
      <div className="flex-row">
        <div
          className={todo.complete ? "item-text strike" : "item-text"}
        >{`Task title: ${todo.task}`}</div>
        <div>{`Date of create: ${todo.dateTask}`}</div>
      </div>
      <div className="flex-row">
        <div className="item-delete" onClick={() => removeTask(todo.id)}>
          X
        </div>
        <div onClick={() => toggleTask(todo.id)}>
          <input type="checkbox" />
        </div>
        <SettingsIcon
          onClick={() =>
            setEdit({
              id: todo.id,
              task: todo.task,
              complete: todo.complete,
              dateTask: todo.dateTask,
            })
          }
        />
      </div>
    </div>
  );
};
