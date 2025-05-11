import React, { useState } from "react";
import { Link, Stack, Typography } from "@mui/material";
import { ExpandMore, ExpandLess, AccountCircle } from "@mui/icons-material";
import MenuForLogin from "../Common/MenuForLogin";

const LoginButton = () => {
  
  // For hover styling
  const [hover, setHover] = useState(false);
  // For anchorEl
  const [anchorEl, setanchorEl] = useState(null);
  // For open menu
  const open = Boolean(anchorEl);

  //For closing-Menu component
  const handleMenuClose = ()=>{
    setanchorEl(null)
  }

  // Sx-COlor object for reusability
  const SxColorHoverObj = {
    color: hover ? "white" : "black",
  };

  return (
    <>
      <Link
        underline="none"
        onMouseEnter={(event) => {
          setHover(true);
          setanchorEl(event.currentTarget);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        sx={{
          ml: 4,
          p: 1,
          borderRadius: 2,
          cursor: "pointer",
          "&:hover": { backgroundColor: "blue", color: "white" },
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
          <AccountCircle sx={SxColorHoverObj} />
          <Typography variant="body1" color={SxColorHoverObj.color}>
            Login
          </Typography>
          {hover ? (
            <ExpandLess sx={SxColorHoverObj} />
          ) : (
            <ExpandMore sx={SxColorHoverObj} />
          )}
        </Stack>
      </Link>

      <MenuForLogin open={open} anchorEl={anchorEl} handleMenuClose={handleMenuClose} />
    </>
  );
};

export default LoginButton;
