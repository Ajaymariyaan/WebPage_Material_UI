import { useRouter } from "next/router";
import React from "react";



function CatchAll(){
    const routers= useRouter();
    const {params=[]}=routers.query;
    console.log("catch all routes",{params});


    return(
        <>
        <h1> The Catch All Routes {params}</h1>
        </>
    )
}
export default CatchAll;
