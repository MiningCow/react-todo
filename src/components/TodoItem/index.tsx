import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    title: string;
    handleDelete: (title: string) => void;
}

const TodoItem: FC<Props> = ({ id, title, handleDelete }) => {

  return (
    <li>
      <Link to={id}>
        {title}
      </Link>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
}

export default TodoItem