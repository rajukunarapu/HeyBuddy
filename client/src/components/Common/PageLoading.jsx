import React from "react";
import { LinearProgress, Stack } from "@mui/material";
import FlipkartLogo from "/flipkart-favicon2.png";

const PageLoading = () => {
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={20}
      >
        <img
          src={FlipkartLogo}
          height="80px"
          width="80px"
          alt="flipkart-log"
        />
        <LinearProgress sx={{ width: "250px", mt: 1 }} />
      </Stack>
    </>
  );
};

export default PageLoading;
