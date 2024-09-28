import { configureStore } from "@reduxjs/toolkit";
import { users } from "./userData/users";

const store = configureStore({
    reducer:{
        [users.reducerPath]:users.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(users.middleware),
})

export default store;