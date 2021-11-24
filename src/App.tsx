import { FC } from "react";
import TodoList from "./TodoList";
import "./App.css";

export interface todoItem {
  title: string;
  priority: number;
}

const App: FC = () => {
  const initialTodos : todoItem[] = [
    { title: "Create a todo list", priority: 10 },
    { title: "Don't procrastinate", priority: 11 }
  ]

  return (
    <TodoList initialTodos={initialTodos}/>
  );
}

export default App;
