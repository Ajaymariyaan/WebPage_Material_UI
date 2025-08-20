import Content from "@/Component/WebSite/Content";
import RightBar from "@/Component/WebSite/RightBar";
import { Container, Stack } from "@mui/material";
// import Menu from "@mui/material";
import Menu1 from "@/Component/WebSite/Menu";
import React from "react";
import NavBar from "@/Component/WebSite/NavBar";
import Box from "@mui/material";
// import { Rowing } from "@mui/icons-material";


function WebPage(){


    return(
        <>
        {/* <Box> */}
        <NavBar/>

       <Container maxWidth='100%' sx={{padding:'0px'}} >
       {/* <p>wqdbiqwyh</p> */}
       <Stack direction="row" spacing={2} justifyContent={"space-between"} >
        
        <Menu1></Menu1>
        <Content>

        </Content>
        <RightBar></RightBar>
       </Stack>
       
       </Container>

       {/* </Box> */}
       </>
    )
}

export default WebPage;
