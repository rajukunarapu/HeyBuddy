import React from "react";
import Header from "../layouts/Header";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import AuthSharedCard from "../components/Authentication/AuthSharedCard";

const SignUpPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <AuthSharedCard
        title1={"Looks like you're new here!"}
        title2={"Sign up with your email address to get started"}
        mode={"signup"}
        href={"/login"}
      />
      <Footer />
    </>
  );
};

export default SignUpPage;
