import TodoItemType from "../types/TodoItemType"
import { v4 as uuidv4 } from 'uuid';

export const initialTodos : TodoItemType[] = [
    { title: "Create a todo list", priority: 10, id: uuidv4() },
    { title: "Priority test 3", priority: 3, id: uuidv4() },
    { title: "Priority test 4", priority: 4, id: uuidv4() },
    { title: "Priority test 1", priority: 1, id: uuidv4() },
    { title: "Don't procrastinate", priority: 11, id: uuidv4() }
];