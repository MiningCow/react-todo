import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import TodoItemType from "../types/TodoItemType";
import initialState from "../mock/initialTodos";

export type todosState = Record<string, TodoItemType>;

// export const initialState: todosState = initialTodos;

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoItemType>) => {
      state = {...state, [action.payload.id]: action.payload};
    },
    // updateTodo: (state, action: PayloadAction<TodoItemType>) => {
    //   state = {...state, [action.payload.id]: action.payload};
    // },
    deleteTodo: (state, action: PayloadAction<string>) => {
      delete state.action;
    },
  },
})

// Action creators are generated for each case reducer function
export const { createTodo, deleteTodo } = counterSlice.actions

export default counterSlice.reducer