import { useTodoStats } from "../hooks/useTodoStats"
import { TodoItem } from "./TodoItem"

export function TodoList() {
  const { todos } = useTodoStats();

  return (
    <ul>
        {todos.map(todo => {
            return (
              <TodoItem
                key={todo.text}
                text={todo.text}
              />
            )
          })
        }
    </ul>
  )
}
