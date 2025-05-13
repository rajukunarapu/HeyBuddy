import React from "react";
import {
  AccountCircle,
  Cases,
  FavoriteBorder,
  Redeem,
  Stars,
} from "@mui/icons-material";
import {
  Divider,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

const MenuForLogin = ({ open, anchorEl, handleMenuClose }) => {

  const menuItemsLables = [
    { id: 1, name: "My Profile", icon: <AccountCircle /> },
    { id: 2, name: "Orders", icon: <Cases /> },
    { id: 3, name: "Wishlist", icon: <FavoriteBorder /> },
    { id: 4, name: "Rewards", icon: <Stars /> },
    { id: 5, name: "Gift Cards", icon: <Redeem /> },
  ];

  return (
    <>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        sx={{"& .MuiList-root":{p:0}}}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
      >
        <Stack
          direction={"row"}
          spacing={6}
          p={"15px 16px"}
          alignItems={"center"}
        >
          <Typography variant="body1">New Customer?</Typography>
          <Link
            href = "/signup"
            underline="none"
            fontWeight={"bolder"}
            sx={{ cursor: "pointer" }}
          >
            Sign Up
          </Link>
        </Stack>

        <Divider variant="fullWidth" />

        {menuItemsLables.map((item) => (
          <MenuItem key={item.id} >
            <Stack direction={"row"} alignItems={"center"} p={"3px 0px"} spacing={2}>
              {item.icon}
              <Typography>{item.name}</Typography>
            </Stack>
          </MenuItem>
        ))}

      </Menu>
    </>
  );
};

export default MenuForLogin;
