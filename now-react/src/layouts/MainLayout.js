import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import HomeHeader from "../home/HomeHeader";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="App">
      <Header />
      <div className="home">
        <HomeHeader />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
