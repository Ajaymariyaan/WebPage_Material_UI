import React from "react";
// import Practice from "@/Component/Practice";

// import Practice from "@/Component/Practice";
// import Typography from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import { Button, Container, styled, ThemeProvider}  from "@mui/material";
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { Padding, Send} from "@mui/icons-material";
import BtnTheme from "@/Component/BtnTheme";
import GetTheme from "@/Component/GetTheme";
import Boxx from "@/Component/Box";
import WebPage from "./WebPage";
// import Box from "@mui/material";
import DatePickerSample2 from "@/Component/DatePickerSample2";
// import DatePickerSample2 from "@/Component/DatePickerSample2";
// import DatePickerSample from "@/Component/DatePickerSample";
// import WebPage from "./WebPage";
// import Boxx from "@mui/material";
// import ThemeProvider from "@mui/material";
const StyledButton=styled(Button)({
  background:'greenyellow',
  color:'green',
  borderRadius:'14px',
  "&:hover":{
     background:'yellow',
  color:'green',
  }

})
export default function Home() {
  return (
  // <>

  // <Practice/>
  // </>
  <>
  {/* //  <Box> */}
{/*     
    <Typography variant="h5" component='p' align="center" noWrap={true} sx={{backgroundColor:'teal',color:'yellowgreen'}}>

      Rendering:
Server-Side Rendering  How Next.js renders pages on the server for improved performance and SEO.
Static Site Generation  Generating static HTML files at build time for highly performant, pre-rendered content.
Incremental Static Regeneration Combining SSG with dynamic data updates.
Partial Prerendering: An advanced concept for optimizing initial load times.

    </Typography>
<div>
      <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained" sx={{backgroundColor:'red'}}>click me by SX Properity</Button>
<Button variant="contained" disabled>disabled</Button>
<Button variant="contained" color="success"  size="large">Success color</Button>
<Button variant="contained" sx={{
  background:'grey',
  color:'yellow',
  borderRadius:'14px',
  "&:hover":{
     background:'yellow',
  color:'grey',
  }
}}>Customized Button </Button> 
</div>
< SendSharpIcon color="primary" align="center" />
<Button variant="contained" color="primary" startIcon={<Send/>}>Send </Button>
    <br/>
  <StyledButton>Customed Styled component Button </StyledButton>


<br/>
<Button varient="primary"></Button>
<div>
  <ThemeProvider theme={BtnTheme}>

    <GetTheme/>
  </ThemeProvider>
</div>


<Boxx/> */}

 <Container maxWidth={false} sx={{ paddingLeft: 0,
        paddingRight: 0,width:'100%',height:'100%'}}>
<WebPage/>

{/* <DatePickerSample2/> */}
    </Container>
    {/* </Box> */}

    </>

  );
}
