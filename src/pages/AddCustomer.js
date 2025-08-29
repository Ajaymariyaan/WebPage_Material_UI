// import { Box, Button, TextField } from "@mui/material";

// import React, { useState } from "react";
// import { addCustomer as addCustomerAction} from "@/Component/Slice/CustomerSlice";
// import { useDispatch } from "react-redux";
// function CustomerAdd(){
//     const [input,setInput]=useState("");
//     // const[customer,setCustomer]=useState([]);
// const dispatch=useDispatch("");

//     const addCustomer =()=>{
//      if(input){
//         // setCustomer((prev)=>[...prev,input])
//         dispatch(addCustomerAction(input))
//         setInput("");



// // console.log(customer)
//     }
//     }
//     return (

//         <>
//         <Box>
//             <p>Add New Customer</p>
//            <TextField variant="outlined" onChange={(e)=> setInput(e.target.value)}  sx={{height:20 }}/>
            
//             <Button variant="contained" onClick={addCustomer}>Add</Button>
       
//         <p>{customer} </p>
       
       
//         </Box>
        
//         </>
//     )
// }
// export default CustomerAdd;

// CustomerAdd.js
"use client"; 

import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addCustomer as addCustomerAction } from "@/Component/Slice/CustomerSlice";

function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer);

  const addCustomer = () => {
    if (input) {
      dispatch(addCustomerAction(input));
      setInput("");
    }
  };

  return (
    <Box>
      <p>Add New Customer</p>
      <TextField
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ height: 20 }}
      />
      <Button variant="contained" onClick={addCustomer}>
        Add
      </Button>

      <h3>Customer List:</h3>
      <ol>
        {customer.map((cust, index) => (
          <li key={index}>{cust}</li>
        ))}
      </ol>
    </Box>
  );
}

export default CustomerAdd;
