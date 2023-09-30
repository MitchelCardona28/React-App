import "./App.css";
import { TodoProvider } from "./context/TodoProvider";
import { TodoTitle } from "./components/TodoTitle";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
