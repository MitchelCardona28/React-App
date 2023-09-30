import { useState } from "react";
import { initialValue } from "../consts"

export function useTodoList() {
  const [todos, setTodos] = useState(initialValue);

  const checkTodo = (text) => {
    const newTodo = todos.map(todo => {
      if (todo.text === text) {
        return {
          ...todo,
          complete: true
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodo);
  }

  const completedTodos = todos.reduce((acc, todo) => {
    if (todo.complete) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const deleteTodo = (text) => {
    const newTodo = todos.filter(todo => todo.text !== text);

    setTodos(newTodo);
  }

  const addTodo = (text) => {
    const newTodo = {
      text,
      complete: false
    };

    const newTodos = todos.concat(newTodo);

    setTodos(newTodos);
  };

  return { todos, completedTodos, checkTodo, deleteTodo, addTodo };
}
