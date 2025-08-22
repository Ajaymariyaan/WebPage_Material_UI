import React, { useState,useEffect } from "react";
import { Box, TextField } from "@mui/material";
import TourCard from "../TourCard";
import Button from "@mui/material/Button";
import { useRef } from "react";


function Content(){
  const [text,setText] = useState("");
  const[texted,setTexted]=useState("");
  // const [saved,set]
  
const userRef=useRef();

// const handleChange=(e)=>{
//   setText(e.target.value)

// }

const handleClicker=()=>{
  setTexted(text);
  

  userRef.current.value ="";
}


useEffect(()=> {
  const saved = localStorage.getItem("textedd")
  if (saved ) setTexted(saved);
  // const savedd = localStorage.getItem("textedd");
  // console.log("textedd");

},[]);

const handleSave=()=>{

  localStorage.setItem("textedd",texted)
}
// useEffect(()=>{
//  const savedd = localStorage.getItem("textedd");
//   console.log(savedd)

// },[]);
 
//  const savedd = localStorage.getItem("textedd");
  // console.log(savedd)
    return(

       <>
       <Box flex={5}>

        <Box marginTop={2}> 
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e)=>setText(e.target.value)} inputRef={userRef}/>
         <p> TEXT is : {texted}</p>
         {/* <p>saved item : {savedd}</p> */}

         <Button variant="contained" onClick={handleClicker}>Update </Button>
         <Button variant="contained" onClick={handleSave} >Save</Button>
        </Box>
         <TourCard/>
         <TourCard/>
         <TourCard/>
        
        

       </Box>
    
       </>
    )
}

export default Content;

