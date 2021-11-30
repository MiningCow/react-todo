import { useState, FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "../components/TodoList";
import { initialTodos } from "../mock/initialTodos";
import TodoItemType from "../types/TodoItemType";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(initialTodos);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>(0);

  const createTodo = () => {
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
      <button onClick={() => createTodo()}>+</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default TodoPage;
