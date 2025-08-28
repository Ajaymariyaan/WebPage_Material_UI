import { Button } from "@mui/material";
import React, { useState } from "react";


 export default function SSRS({name,values}){
const[count,setCount]=useState(values)
const on=()=>{
    setCount(count*2)
    
}

    return( 
        <>
        <Button onClick={on} variant="contained"> Click me </Button>
        <h1>wefwe {name}</h1>
        <h2>{count}</h2>
        
        </>
    )
}





 export async function getServerSideProps(){

const Name="Ajaii";
// const values=5;
return{



    


props:{
name:Name,
values:5,

}
    
    
}
 }
 

