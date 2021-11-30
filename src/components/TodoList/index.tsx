import { FC } from "react";
import TodoItem from "../TodoItem";
import TodoItemType from "../../types/TodoItemType";

interface Props { todos: TodoItemType[], deleteTodo: (title: string) => void; }

const TodoList: FC<Props> = ({ todos, deleteTodo }) => {

    const sortedTodos = () => {
        const sortedTodos = [...todos];
        sortedTodos.sort((a, b) => b.priority - a.priority);
        return (
            sortedTodos.map(todo => (
                <TodoItem key={todo.id} title={todo.title} handleDelete={deleteTodo} id={todo.id}/>
            ))
        )   
    }

    return (
        <ul>
            {sortedTodos()}
        </ul>
    )
}

export default TodoList