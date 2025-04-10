import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />
      <main className=" px-4 md:px-5 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
