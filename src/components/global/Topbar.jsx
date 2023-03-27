import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { palette } from "@mui/system";
// import profilepic from './user.jpg'
import Sidebar from "./Sidebar";

const Topbar = () => {
 const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
// test commit user check


// 
  return (
    <>
    <Box 
    display='flex'
    justifyContent='space-between'
    alignItems='baseline'
    alignContent='stretch'
    p='0rem 0rem'
    color = 'black'
    gap='4rem'
    width='100%'

    >

        <Box>
           <Sidebar />
        </Box>
        <Box
         display='flex'
         justifyContent='space-between'
         alignItems='center'
         margin='0rem 4rem'
         >
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Box
        
        >
                <img
                  alt="profile-user"
                  width="max-content"
                  height="50px"
                //   src={profilepic}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box> 
              <Box textAlign="center" >
                <Typography
                  width='max-content'
                  marginLeft='5px'
                  variant="h6"
                  color={colors.black[100]}
                  fontWeight="bold"
                 
                >
                  Mathias Lawson
                </Typography>
                <Typography variant="h6" color={colors.black[300]} width='max-content' marginLeft='5px'>
                 Software Messenger
                </Typography>
              </Box>
        </Box>
 
     
    
    </Box>
    </>
  );
};

export default Topbar;