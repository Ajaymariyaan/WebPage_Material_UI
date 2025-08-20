import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Accessibility, Agriculture, AirplanemodeActive, Explore, Inbox, Info, Mic } from "@mui/icons-material";

function Menu1(){


    return(

    //    color='Yellowgreen' flex={1} backgroundColor='teal'
       <Box flex={1} sx={{display:{sm:'none',xs:'none',lg:'block'}}} >
        <Box position={"fixed"}>
        
  <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Accessibility/>
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
