import { FC } from "react";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store";

const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);

  const sortedTodos = () => {
    const sortedTodos = Object.values(todos);
    sortedTodos.sort((a, b) => b.priority - a.priority);
    return (
      sortedTodos.map(todo => (
        <TodoItem key={todo.id} title={todo.title} id={todo.id} />
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