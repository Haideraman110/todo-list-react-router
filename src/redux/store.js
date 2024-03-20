import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slices/todoslice";

const store=configureStore({
    reducer:{
       todo:todoslice 
    }
})

export default store