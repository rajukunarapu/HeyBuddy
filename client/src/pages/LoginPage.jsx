import React from "react";
import Header from "../layouts/Header";
import NavBar from "../layouts/NavBar";
import AuthCard from "../components/Authentication/AuthCard";
import Footer from "../layouts/Footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <AuthCard
        header1="Login"
        header2="Get access to your Orders, Wishlist and Recommendations"
        linkText="New to flipkart? create an account"
      />
      <Footer />
    </>
  );
};

export default LoginPage;
