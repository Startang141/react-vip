import {legacy_createStore } from "redux"

// reducer
const cartReducer = (state = {
    cart:[],
}, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart, action.payload],
            }
        default:
            return state
    }
}

// store
const store = legacy_createStore(cartReducer);
console.log("OnCreateStore : ", store.getState());

// subscribe
store.subscribe(()=>{
    console.log("OnChange : ", store.getState());
})

// dispatch
const action1 = {type:"ADD_TO_CART", payload:{id:1, qty:1}};
store.dispatch(action1);
const action2 = {type:"ADD_TO_CART", payload:{id:2, qty:2}};
store.dispatch(action2);