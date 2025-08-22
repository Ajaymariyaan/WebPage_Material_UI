import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Accessibility, Agriculture, AirplanemodeActive, ContactPage, Explore, Home, HomeFilled, Inbox, Info, Mic, Warning } from "@mui/icons-material";
import About from "../About/page";
import Link from "next/link";


function Menu1() {

const ShowAlert=()=>{
  alert("The Alert Button Click ")

}
  return (

    //    color='Yellowgreen' flex={1} backgroundColor='teal'
    <Box flex={1} sx={{ display: { sm: 'none', xs: 'none', lg: 'block' } }} >
      <Box position={"fixed"}>

        <List>
          <ListItem disablePadding >
            <Link href="/About" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </Link>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="/About">
              <ListItemIcon>
                <HomeFilled />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding >
            <Link href={"/Contact"}>
              <ListItemButton>
                <ListItemIcon>
                  <ContactPage />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={ShowAlert}>
              <ListItemIcon>
                <Warning />
              </ListItemIcon>
              <ListItemText primary="Alert" />
            </ListItemButton>
          </ListItem>




          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility />
              </ListItemIcon>
              <ListItemText primary="Access" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActive />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Agriculture />
              </ListItemIcon>
              <ListItemText primary="Form" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Mic />
              </ListItemIcon>
              <ListItemText primary="Mic" />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Box>



  )
}

export default Menu1;
