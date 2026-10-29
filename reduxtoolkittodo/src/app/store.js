import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';//todoReducer kyukki export default hai
export const store = configureStore({
    reducer : todoReducer

    
})