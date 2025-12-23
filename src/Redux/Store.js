import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import ThemeReducer from "./ThemeSlice";
import colorReducer from "./colorSlice";


export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        theme: ThemeReducer,
        color: colorReducer,

    },
});

