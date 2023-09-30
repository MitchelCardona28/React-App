import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

export function useAddTodo() {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error('useAddTodo must be used within a TodoProvider');
  };

  return context.addTodo;
}
