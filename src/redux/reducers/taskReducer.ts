import { sortTodos, TaskActionType } from "../../utils/const";
import { ITaskStore } from "../../utils/Interfaces";
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  GET_TASKS,
  UPDATE_TASK,
} from "../actions/actionTypes";

interface Istate {
  tasks: ITaskStore[];
}
const initialState: Istate = {
  tasks: [],
};
function overrideItem<T>(array: T[], newItem: T, targetIndex: number) {
  return array.map((item, index) => {
    if (index !== targetIndex) {
      return item;
    }

    return newItem;
  });
}

function removeItem<T>(array: T[], index: number) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export const taskReducer = (state = initialState, action: TaskActionType) => {
  switch (action.type) {
    case UPDATE_TASK: {
      const { key, id, task } = action.payload;
      const targetTaskIndex = state.tasks.findIndex((x) => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];
      const targetTodoIndex = targetTask.todos.findIndex((x) => x.id === id);
      const targetTodo = targetTask.todos[targetTodoIndex];
      const updateTodo = {
        ...targetTodo,
        task,
      };

      const updateTask = {
        ...targetTask,
        todos: overrideItem(targetTask.todos, updateTodo, targetTodoIndex),
      };

      return {
        ...state,
        tasks: overrideItem(state.tasks, updateTask, targetTaskIndex),
      };
    }
    case DELETE_TASK: {
      const { key, id } = action.payload;

      const targetTaskIndex = state.tasks.findIndex((x) => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];
      const targetTodoIndex = targetTask.todos.findIndex((x) => x.id === id);

      const updatedTask = {
        ...targetTask,
        todos: removeItem(targetTask.todos, targetTodoIndex),
      };

      return {
        ...state,
        tasks: overrideItem(state.tasks, updatedTask, targetTaskIndex),
      };
    }
    case GET_TASKS: {
      const { key } = action.payload;
      const targetTaskIndex = state.tasks.findIndex((x) => x.key === key);
      if (targetTaskIndex !== -1) {
        const targetTask = state.tasks[targetTaskIndex];
        sortTodos.length = 0;
        sortTodos.concat(targetTask.todos);
      }
      return state;
    }
    case ADD_TASK: {
      const { key, newTask } = action.payload;
      const targetTaskIndex = state.tasks.findIndex((x) => x.key === key);
      if (targetTaskIndex === -1) {
        state.tasks.push({key: newTask.dateTask, todos: [newTask]});
      } else {
        const targetTask = state.tasks[targetTaskIndex];
        console.log(state.tasks);
        const updatedTask = {
          ...targetTask,
          todos: [...targetTask.todos, newTask],
        };
        return {
          ...state,
          tasks: overrideItem(state.tasks, updatedTask, targetTaskIndex),
        };
      }
      console.log(state);
      return {...state,tasks: state.tasks};
    }
    case DONE_TASK: {
      const { id, key } = action.payload;
      const targetTaskIndex = state.tasks.findIndex((x) => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];
      const targetTodoIndex = targetTask.todos.findIndex((x) => x.id === id);
      const targetTodo = targetTask.todos[targetTodoIndex];
      let done = false;
      if (targetTodo.complete) {
        done = true;
      }
      const updateTodo = {
        ...targetTodo,
        done,
      };
      const updatedTask = {
        ...targetTask,
        todos: overrideItem(targetTask.todos, updateTodo, targetTodoIndex),
      };
      return {
        ...state,
        tasks: overrideItem(state.tasks, updatedTask, targetTaskIndex),
      };
    }
    default:
      return state;
  }
};
