import React, { useEffect, useState } from "react";
import { Box,Button,TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
function Login(){

    const[password,setPassword]=useState("");
    const[email,setEmail]= useState("");
    const[error,setError]=useState("");
    const[submitted,setSubmmitted]=useState("");



    const router = useRouter();
   
console.log(error);

    

    const handleSubmit=(e)=>{
e.preventDefault()


if (!email || !password ){
    setError("kindly Fill The Field" )
    return;
}

setError("");
setSubmmitted(true);
    }

 
     useEffect(()=>{
        if(submitted){

        
        if(email==="ajay@gmail.com"||password==="ajay123")
    {
        setError("");
        router.push("/WebPage")

    }
    else{

        setError("Invalid Email And the Password");
    }
}


    
  },[submitted])



    
 

    return(

        <>

        <Box >
           
          <Box 
        //   component="form"
         sx={{  alignItems:"center",display:"flex",flexDirection:"column" ,gap:"20px"}}>
            <TextField id="outlined-basic" label="Email" variant="outlined"
             onChange={(e)=> setEmail(e.target.value)} />
            <TextField id="outlined-basic" label="Password" variant="outlined"
            onChange={(e)=>setPassword(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{
                // width:"150px",
            }}>Submit</Button>

            <p>{email}</p>
            <p>{password}</p>
            
             {error && <Typography color="error">{error} </Typography>}
          
           </Box>
            





        </Box>
        
        
        
        </>
    )
}

export default Login;
