import { useRouter } from "next/router";
import React from "react";


function DynamicId(){

const router = useRouter();
    const {id} = router.query;

console.log("Dynamic Id",{id})
    return(

        <>
        <h1> You Opened the id : {id} </h1>
        {/* <h1>gubcwe8figwe</h1> */}
        </>
    )
}
export default DynamicId;
