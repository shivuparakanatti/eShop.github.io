import React from "react";
import {createStore, combineReducers} from 'redux'
import registerReducer from "../reducers/registerReducer";
import cartReducer from "../reducers/cartReducer";
const configureStore =()=>{
    const store = createStore(combineReducers({
        register : registerReducer,
        cart : cartReducer

    }))

    return store
    
}

export default configureStore