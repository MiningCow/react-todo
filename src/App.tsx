import { useState, FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import "./App.css";

export interface todoItem {
  id: string;
  title: string;
  priority: number;
}

const App: FC = () => {
  const initialTodos : todoItem[] = [
    { title: "Create a todo list", priority: 10, id: uuidv4() },
    { title: "Priority test 3", priority: 3, id: uuidv4() },
    { title: "Priority test 4", priority: 4, id: uuidv4() },
    { title: "Priority test 1", priority: 1, id: uuidv4() },
    { title: "Don't procrastinate", priority: 11, id: uuidv4() }
  ]

  const [todos, setTodos] = useState<todoItem[]>(initialTodos);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>(0);

  const handleCreateTodo = () => {
    if (title) {
      setTodos([...todos, { title: title, priority: priority, id: uuidv4()}])
      setTitle("");
      setPriority(0);
    } else {
      alert("Todo title cannot be empty");
    }
  }

  const deleteTodo = (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />
      <button onClick={() => handleCreateTodo()}>+</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
