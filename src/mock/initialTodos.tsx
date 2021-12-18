import TodoItemType from "../types/TodoItemType"
import { v4 as uuidv4 } from 'uuid';

const todoTitles = ["title1", "title2", "title3", "title4", "title5"];

const initialTodos = todoTitles.reduce((acc: Record<string, TodoItemType>, title, index) => {
  const todoId = uuidv4();
  if (!acc[todoId]) {
    acc[todoId] = {title: title, priority: index+1, id: todoId};
  }
  return acc
}, {});

export default initialTodos;