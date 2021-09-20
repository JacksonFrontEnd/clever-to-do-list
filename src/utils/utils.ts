import { stars, sortTodos } from "./const";

export const newDate = () => {
  stars.length = 0;
  for (let i = 0; i < sortTodos.length + 1; i++) {
    stars.push("*");
  }
};
