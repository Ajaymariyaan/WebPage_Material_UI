// import { Web } from "@mui/icons-material";
import React from "react";
// import CustomerAdd from "./AddCustomer";
import CustomerAdd from "./AddCustomer";
import CustomerView from "@/Component/ReduxCustomerView";
import { Provider } from "react-redux";
// import { store } from "./ReduxStore";
import {store} from './ReduxStore'



function ReduxWebPage(){



    return(

        <>
        <Provider store={store}>
            <h1> main page </h1>
        <CustomerAdd/>
        <CustomerView/>

        </Provider>
        </>
    )
}

export default ReduxWebPage;
