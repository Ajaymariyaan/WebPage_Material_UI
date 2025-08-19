import React from "react";
import { Box, Container} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";

function Boxx(){


    return(<>
    <Container>
<Box sx={{
    backgroundColor:'yellow',
    width:'100%',
    height:'200px',
    alignContent:'center',
    padding:'5px',
    color:'teal',
    alignItems:'center'
}}>
    BOX Used Instead of the DIV


</Box>

<Grid container spacing={2}>
  <Grid item xs={8}>
    <Button variant="contained" sx={{width:'100%'}} >xs=8</Button >
  </Grid>
  <Grid item xs={4}>
    <Button variant="contained" sx={{width:'100%'}}>xs=4</Button >
  </Grid>
  <Grid item xs={4}>
    <Button variant="contained" sx={{width:'100%'}}>xs=4</Button >
  </Grid>
  <Grid item xs={8}>
    <Button variant="contained" sx={{width:'100%'}}>xs=8</Button >
  </Grid>
</Grid>
    </Container>
    </>)
}


export default Boxx;
