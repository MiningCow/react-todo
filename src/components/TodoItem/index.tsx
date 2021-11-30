import { FC } from 'react';

interface Props {
    id: string;
    title: string;
    handleDelete: (title: string) => void;
}

const TodoItem: FC<Props> = ({ id, title, handleDelete }) => {

    return (
        <li>
            {title}
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}

export default TodoItem