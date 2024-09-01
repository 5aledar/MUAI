import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
import chatReducer from '../features/chatSlice';
export const store = configureStore({
    reducer: { 
        [articleApi.reducerPath]: articleApi.reducer,
        chat: chatReducer,
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})