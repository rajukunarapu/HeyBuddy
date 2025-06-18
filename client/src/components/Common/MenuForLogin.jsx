import React from "react";
import {
  AccountCircle,
  Cases,
  FavoriteBorder,
  Logout,
  Notifications,
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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutAPI } from "../../utils/AuthAPIHelper";

const MenuForLogin = ({
  open,
  anchorEl,
  handleMenuClose,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const menuItemsBeforeAuthenticate = [
    { id: 1, name: "My Profile", icon: <AccountCircle /> },
    { id: 2, name: "Orders", icon: <Cases /> },
    { id: 3, name: "Wishlist", icon: <FavoriteBorder /> },
    { id: 4, name: "Rewards", icon: <Stars /> },
    { id: 5, name: "Gift Cards", icon: <Redeem /> },
  ];

  const menuItemsAfterAuthenticate = [
    ...menuItemsBeforeAuthenticate,
    { id: 6, name: "Notification", icon: <Notifications /> },
    { id: 7, name: "logout", icon: <Logout /> },
  ];

  const { isAuthenticated, authCheck } = useContext(AuthContext);

  return (
    <>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        sx={{ "& .MuiList-root": { p: 0 }, mt: 0.4}}
        MenuListProps={{
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        }}
      >
        {isAuthenticated
          ? menuItemsAfterAuthenticate.map((item) => (
              <MenuItem
                sx={{ width: "250px" }}
                onClick={async () => {
                  if (item.name === "logout") {
                    await logoutAPI();
                    await authCheck();
                    handleMenuClose()
                  }
                }}
                key={item.id}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  p={"3px 0px"}
                  spacing={2}
                >
                  {item.icon}
                  <Typography>{item.name}</Typography>
                </Stack>
              </MenuItem>
            ))
          : [
              <Stack
                key={"stack"}
                direction={"row"}
                spacing={6}
                p={"15px 16px"}
                alignItems={"center"}
                sx={{ width: "100%" }}
              >
                <Typography variant="body1">New Customer?</Typography>
                <Link
                  href="/signup"
                  underline="none"
                  fontWeight={"bolder"}
                  sx={{ cursor: "pointer" }}
                >
                  Sign Up
                </Link>
              </Stack>,
              <Divider key="divider" />,
              ...menuItemsBeforeAuthenticate.map((item) => (
                <MenuItem key={item.id}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    p={"3px 0px"}
                    spacing={2}
                  >
                    {item.icon}
                    <Typography>{item.name}</Typography>
                  </Stack>
                </MenuItem>
              )),
            ]}
      </Menu>
    </>
  );
};

export default MenuForLogin;
