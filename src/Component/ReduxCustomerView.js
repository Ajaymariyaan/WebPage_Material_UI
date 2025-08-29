import React from "react";
import { useSelector } from "react-redux";


function CustomerView(){
 const customer=useSelector((state)=> state.customer)

    return(

        <>
        <h2>Customer List </h2>
        <ol>
            {customer.map((cust)=>
            <li>
                {cust}
            </li>)}
        </ol>
        
        </>
    )
}

export default CustomerView;
