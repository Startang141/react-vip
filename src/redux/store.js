import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "./slices/cartSlice";

const store = configureStore({
    reducer: {cart:cartReducer},
});

console.log("OnCreateStore:", store.getState());

store.subscribe(()=>{
    console.log("OnChange:", store.getState())
})