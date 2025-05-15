import React from "react";
import Header from "../layouts/Header";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import AuthSharedCard from "../components/Authentication/AuthSharedCard";

const LoginPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <AuthSharedCard
        title1={"Login"}
        title2={"Get access to your Orders, Wishlist and Recommendations"}
        mode={"login"}
        href={"/signup"}
        linkName={"New to flipkart? Create an account"}
      />
      <Footer />
    </>
  );
};

export default LoginPage;
