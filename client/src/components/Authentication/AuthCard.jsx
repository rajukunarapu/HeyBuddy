import React from "react";
import { Stack, Typography, Link } from "@mui/material";
import FlipkartAuthBoxLogo from "../../assets/images/Flipkart-authBox-logo3.png";
import AuthTextFields from "./AuthTextFields";


const AuthCard = ({ header1, header2, linkText }) => {

  return (
    <>
      <Stack
        direction={"row"}
        m={"40px 0px"}
        height={"400px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          direction={"column"}
          position={"relative"}
          maxHeight={"400px"}
          width={"25%"}
          p={"30px"}
          height={"100%"}
          sx={{ backgroundColor: "rgb(40, 116, 240)" }}
        >
          <Typography variant="h5" color="white" fontWeight={"bold"}>
            {header1 ? header1 : "Looks like you're new here!"}
          </Typography>
          <Typography variant="h6" mt={2} sx={{ color: "#dbdbdb" }}>
            {header2
              ? header2
              : "Sign up with your email address to get started"}
          </Typography>
          <img
            src={FlipkartAuthBoxLogo}
            width={200}
            height={100}
            style={{ objectFit: "contain", margin: "80px auto" }}
          />
        </Stack>

        <Stack
          direction={"column"}
          maxHeight={"400px"}
          width={"30%"}
          p={"30px"}
          alignItems={"center"}
          height={"100%"}
          sx={{ backgroundColor: "white" }}
        >
          <AuthTextFields/>

          <Typography variant="subtitle2" mt={2} sx={{ color: "#878787" }}>
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </Typography>

          <Link
            underline="hover"
            href={linkText ? "/signup" : "/login"}
            mt={3}
            fontWeight={"bold"}
            sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          >
            {linkText ? linkText : "Existin User? Log in"}
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default AuthCard;
