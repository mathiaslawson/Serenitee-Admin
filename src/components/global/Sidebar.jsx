import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import profilepic from  './user.jpg'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.green[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.black[900]} !important`,
          height: '100vh !important',
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "10px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "green !important",
        },
        "& .pro-menu-item.active": {
          color: "green !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 50px 0",
              color: colors.black[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.black[100]}>
                  Serenitee
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="80px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                //   src={profilepic}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                /> */}
              </Box>
              {/* <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.black[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Mathias Lawson
                </Typography>
                <Typography variant="h5" color={colors.black[100]}>
                  MERN STACK DEV
                </Typography>
              </Box> */}
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.green[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Business Name
            </Typography> */}
            <Item
              title="Calendar"
              to="/calendar"
              icon={<BusinessOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Appointments"
              to="/appointments"
              icon={<PendingActionsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Patients"
              to="/patients"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Item
              title="Message"
              to="/message"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Reviews"
              to="/reviews"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Profile"
              to="/profile"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;