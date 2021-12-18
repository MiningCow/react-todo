import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";

interface Props {
    id: string;
    title: string;
}

const TodoItem: FC<Props> = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={id}>
        {title}
      </Link>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </li>
  )
}

export default TodoItem