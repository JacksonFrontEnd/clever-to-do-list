export type useTodosType = {
  addTask: (userInput: string) => void;
  removeTask: (id: number) => void;
  handleToggle: (id: number) => void;
  updateTask: (id: number, task: string) => void;
};
