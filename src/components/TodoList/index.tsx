import { FC } from "react";
import TodoItem from "../TodoItem";
import TodoItemType from "../../types/TodoItemType";

interface Props { todos: Record<string, TodoItemType>, deleteTodo: (title: string) => void; }

const TodoList: FC<Props> = ({ todos, deleteTodo }) => {
  const sortedTodos = () => {
    const sortedTodos = Object.values(todos);
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