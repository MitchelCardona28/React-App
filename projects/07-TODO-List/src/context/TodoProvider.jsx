import { createContext } from "react";
import { useTodoList } from "../hooks/useTodoList";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const todoList = useTodoList();

  return (
    <TodoContext.Provider value={ todoList }>
      {children}
    </TodoContext.Provider>
  )
}
