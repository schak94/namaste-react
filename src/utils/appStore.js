import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carSlice"

const AppStore = configureStore({
    reducer:{
        cart: cartReducer
    }
});

export default AppStore;