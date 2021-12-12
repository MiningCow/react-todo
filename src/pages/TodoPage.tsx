import { useState, FC, useEffect } from "react";
import initialTodos from "../mock/initialTodos";
import TodoList from "../components/TodoList";
import TodoItemType from "../types/TodoItemType";
import { Link, Navigate } from "react-router-dom";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<Record<string, TodoItemType>>(initialTodos);
  console.log(initialTodos);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const todosFromStorage = JSON.parse(localStorage.getItem("todos") || JSON.stringify(initialTodos));
      setTodos(todosFromStorage);
    }
  }, []);

  const deleteTodo = (id: string) => {
    const allTodos = Object.values(todos);
    const newTodos = allTodos.reduce((acc: Record<string, TodoItemType>, todo) => {
      if (todo.id !== id) {
        acc[todo.id] = todo
      }
      return acc
    }, {});
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <Link to="/todos/new-todo">create todo</Link>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default TodoPage;
