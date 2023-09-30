import { useTodoStats } from "../hooks/useTodoStats";

export function TodoTitle() {
  const { completedTodos, todos } = useTodoStats();

  return (
    <h1>You have completed {completedTodos} of {todos.length} TODOs</h1>
  );
}
