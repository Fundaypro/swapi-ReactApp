import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/MenuSlice";

export default configureStore({
    reducer: {
        menu : menuReducer,
    },
})