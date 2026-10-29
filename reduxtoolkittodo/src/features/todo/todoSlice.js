import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{
    id: nanoid(),
    text: 'Learn Redux Toolkit',
   
  }],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,//yha hmne action.payload ko use kiya hai jo ki input se aa raha hai  jo usewr hm evalue dena cahhata ahi
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);//yha hmne state.todos ko rewwrite kiya hai filter laga ke 
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;//individual actions ko export kiya hai taki use kr sake

export default todoSlice.reducer;//default reducer ko export kiya hai taki use kr sake