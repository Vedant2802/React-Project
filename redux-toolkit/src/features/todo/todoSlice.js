// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [{ id: 1, text: "Hello World" }],
// };

// export const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   //The reducer functions are basically "actions" these functions are passed the state and action params by default by the redux whenever you dispatch them using useDispatch
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload.text,
//       };
//       state?.todos?.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
