import { useState } from "react";
import { useAddTodo } from "../hooks/useAddTodo";

export function TodoForm() {
  const [inputText, setInputText] = useState('');
  const addTodo = useAddTodo();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(inputText);
    }}>

      <input type="text"
      placeholder="New TODO"
      onChange={(e) => setInputText(e.target.value)}
      value={inputText}
      name="inputText"
      />

      <button type="submit">Add TODO</button>
    </form>
  );
}
