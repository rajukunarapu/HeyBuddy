import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import cartLogo from "../../assets/Cart.svg";

const CartButton = () => {
  return (
    <>
      <Link underline="none" color="gray" ml={4} sx={{ cursor: "pointer" }}>
        <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
          <img src={cartLogo} />
          <Typography variant="body1" color="black" >Cart</Typography>
        </Stack>
      </Link>
    </>
  );
};

export default CartButton;
