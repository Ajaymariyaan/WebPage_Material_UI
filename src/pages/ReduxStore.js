import React from "react";
import { configureStore } from "@reduxjs/toolkit";
// import customerReducer from './Slice/CustomerSlice';
// import customerReducer from './Component/Slice/CustomerSlice';
import customerReducer from '../Component/Slice/CustomerSlice';
 export const store = configureStore({

    reducer:{
        customer: customerReducer
    }
 })