import { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { RootState } from "../redux/store";
import { createTodo } from "../redux/todoSlice";

const TodoForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>(0);
  const { todoId } = useParams();

  useEffect(() => {
    if (todoId && todoId !== "new-todo") {
      const todo = todos[todoId];
      console.log(todo);
      setTitle(todo.title);
      setPriority(todo.priority);
    }
  }, []);
  
  const handleSubmit = () => {
    if (!todoId) return

    let newTodoId;
    if (todoId === "new-todo") {
      newTodoId = uuidv4();
    } else if (todos[todoId]) {
      newTodoId = todoId;
    } else console.log("Couldn't find todo with id " + todoId);
    if (newTodoId) dispatch(createTodo({title: title, priority: priority, id: newTodoId}));
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