import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/flipkart-logo.svg";
import SearchBar from '../components/AppBar/SearchBar'
import LoginButton from "../components/AppBar/LoginButton";
import CartButton from "../components/AppBar/CartButton";
import SellerButton from "../components/AppBar/SellerButton";

const Header = () => {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",
          "&.MuiPaper-root": { boxShadow: "none" },
        }}
      >
        <Toolbar
          sx={{ p: "12px 35px !important", minHeight: "44px !important" }}
        >
          <img src={logo} alt="logo" />
          <SearchBar />
          <LoginButton />
          <CartButton />
          <SellerButton/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
