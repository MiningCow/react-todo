import { useState, FC } from "react";
import TodoItem from "./TodoItem";
import { todoItem } from "./App";

interface Props { initialTodos: todoItem[] }

const TodoList: FC<Props> = ({ initialTodos }) => {
    // const [todos, setTodos] = useState(initialTodos);
    const [todos, setTodos] = useState<todoItem[]>(initialTodos);

    const deleteTodo = (title: string) => {
        setTodos(todos.filter(todo => todo.title !== title));
    }

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem title={todo.title} handleDelete={deleteTodo}/>
            ))}
        </ul>
    )
}

export default TodoList