import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

export function useTodoStats() {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error('useTodoStats must be used within a TodoProvider');
  }

  return {
    completedTodos: context.completedTodos,
    todos: context.todos
  }
}
