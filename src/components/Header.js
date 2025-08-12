import React from "react";
import {
  Divider,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Blogging Website
        </Typography>

        <IconButton>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar
        sx={{
          justifyContent: "center",
          fontSize: 20,
          textTransform: "uppercase",
          fontFamily: "Montserrat",
        }}
      >
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
