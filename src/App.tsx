import { FC } from "react";
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

  return (
    <TodoList initialTodos={initialTodos}/>
  );
}

export default App;
