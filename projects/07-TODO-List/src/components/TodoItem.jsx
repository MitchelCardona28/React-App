import { useContext } from "react";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import { TodoContext } from "../context/TodoProvider";

export function TodoItem({ text }) {
  const {checkTodo, deleteTodo} = useContext(TodoContext);

  return (
    <li className="todo-item">
      <AiOutlineCheckCircle onClick={() => checkTodo(text)} className="todo-item__check todo-item__check--complete"/>
        <p>{ text }</p>
      <AiOutlineClose onClick={() => deleteTodo(text)} className="todo-item__check todo-item__check--close"/>
    </li>
  );
}
