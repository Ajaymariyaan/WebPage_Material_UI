import Content from "@/Component/WebSite/Content";
import RightBar from "@/Component/WebSite/RightBar";
import { Container, createTheme, Stack, ThemeProvider } from "@mui/material";
// import Menu from "@mui/material";
import Menu1 from "@/Component/WebSite/Menu";
import React from "react";
import NavBar from "@/Component/WebSite/NavBar";
import NavBar2 from "@/Component/NavBar2";
import Box from "@mui/material/Box";
import { useState } from "react";

import { Palette } from "@mui/icons-material";
import Link from "next/link";

// import { Rowing } from "@mui/icons-material";


function WebPage(){

const [theme,setTheme]=useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


  const darkTheme = createTheme({

    palette:{
        mode: theme,


    },
  });
    return(
        <ThemeProvider theme={darkTheme}>
         <Box bgcolor={"background.default"} color={"text.primary"}>

        <NavBar onToggleTheme={toggleTheme} currentTheme={theme} />
        {/* <NavBar2/> */}

       <Container maxWidth={false} sx={{padding:'0px'}} >
       {/* <p>wqdbiqwyh</p> */}
       <Stack direction="row" spacing={2} justifyContent={"space-between"} >
        
        <Menu1></Menu1>
        <Content>

        </Content>
        <RightBar></RightBar>
       </Stack>
       
       </Container>
       <Link href={"/About"}> Go To About Page </Link>
        <Link href={"/Contact"}>Go To The Contact</Link>
        </Box>

        </ThemeProvider>
       
    )
}

export default WebPage;
