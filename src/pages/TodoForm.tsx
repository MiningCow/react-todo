import { useEffect, useState, FC } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import TodoItemType from "../types/TodoItemType";

const TodoForm: FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>(0);
  const { todoId } = useParams();

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos") || "");
    console.log(todosFromStorage);
    if (todoId && todoId !== "new-todo") {
      const todo = todosFromStorage[todoId];
      console.log(todo);
      setTitle(todo.title);
      setPriority(todo.priority);
    }
  }, []);

  const handleSubmit = () => {
    if (!todoId) return
    const oldTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    let newTodoId;
    if (todoId === "new-todo") {
      newTodoId = uuidv4();
    } else {
      if (oldTodos[todoId]) {
        newTodoId = todoId;
      } else console.log("Couldn't find todo with id " + todoId);
    }
    const newTodos = {...oldTodos, [newTodoId as string]: {title: title, priority: priority, id: newTodoId}};
    localStorage.setItem("todos", JSON.stringify(newTodos));
    navigate("/todos");
  }

  return (
    <>
      <h1>Todo id: {todoId}</h1>
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
      <button onClick={() => handleSubmit()}>Submit</button>
    </>
  );
}

export default TodoForm;