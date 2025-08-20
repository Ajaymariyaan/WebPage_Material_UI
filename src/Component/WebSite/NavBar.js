import { AppBar, Badge, Box, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function NavBar() {
    const StyledToolBar = styled(Toolbar)({

        display: 'flex',
        justifyContent: 'space-between'


    })



    return (

        <AppBar position={"sticky"} sx={{padding:'0px 0px', marginTop:'0px'}}>
            <Box>
            <StyledToolBar>

                <Typography variant='54'>Tours</Typography>
                <Box sx={{
                    display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', alignItems: 'center'
                }} >
                   
                    <Badge badgeContent={4} color="secondary">
                        < MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="secondary">
                        < NotificationsActiveIcon color="action" />
                    </Badge>



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

export default NavBar;
