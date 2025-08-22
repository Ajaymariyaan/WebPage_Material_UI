import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

// import Button from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Brightness1Outlined, Brightness2, Brightness2Sharp, Brightness2TwoTone, Brightness4, Brightness7, Brightness7Rounded } from "@mui/icons-material";
function NavBar2({ onToggleTheme, currentTheme }) {
    const StyledToolBar = styled(Toolbar)({

        display: 'flex',
        justifyContent: 'space-between'


    })



    return (

        <AppBar position={"sticky"} sx={{padding:'0px 0px', marginTop:'0px'}} color="Secondary">
            <Box>
            <StyledToolBar>

                <Typography variant='54'><p>Tours</p>
                
                </Typography>
                
                <Box sx={{
                    display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', alignItems: 'center'
                }} >
                    <Button variant="contained" color="secondary" href="/blog/NestedSample">NestedPage</Button>
                    <Button variant="contained" color="secondary" href="/Nest/Nested/Nested2Step">Two Step Folder</Button>
                    
                   
                    <Badge badgeContent={100} max={99}  color="secondary" >
                        < MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        < NotificationsActiveIcon color="action" />
                    </Badge>
                     <IconButton onClick={onToggleTheme} color="inherit">
              {currentTheme === "dark" ? <Brightness7Rounded/> : <Brightness4 />}
            </IconButton>



                    <Avatar
                        alt="Ajay Pofile"
                        src="avatar.png"
                    />
                   
                </Box>
            </StyledToolBar>
            </Box>
        </AppBar>
    )
}

export default NavBar2;
