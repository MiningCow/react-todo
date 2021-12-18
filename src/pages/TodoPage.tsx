import { FC } from "react";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";


const TodoPage: FC = () => {
  return (
    <>
      <Link to="/todos/new-todo">create todo</Link>
      <TodoList/>
    </>
  );
}

export default TodoPage;
