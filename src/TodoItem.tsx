import { FC } from 'react';

interface Props {
    title: string;
    handleDelete: (title: string) => void;
}

const TodoItem: FC<Props> = ({ title, handleDelete }) => {

    return (
        <li>
            {title}
            <button onClick={() => handleDelete(title)}>Delete</button>
        </li>
    )
}

export default TodoItem