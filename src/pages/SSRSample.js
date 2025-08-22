import React from "react";


function SampleSSRGet({time}){

    return(

        <>
        <p>  data is {time}</p>
        
        </>
    )
}

export default SampleSSRGet;



export async function getServerSideProps(){

    return{
      
         props: { time: new Date().toISOString() },
       
    
};
}