import { useState, FC } from "react";
import TodoItem from "./TodoItem";
import { todoItem } from "./App";

interface Props { initialTodos: todoItem[] }

const TodoList: FC<Props> = ({ initialTodos }) => {
    // const [todos, setTodos] = useState(initialTodos);
    const [todos, setTodos] = useState<todoItem[]>(initialTodos);

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

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