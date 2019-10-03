import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2" color="inherit">
          Exercise Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
