import { configureStore } from "@reduxjs/toolkit";
import MylistSlice from "./MylistSlice";


const store = configureStore({
    reducer:{
        myList: MylistSlice
    }
})

export default store