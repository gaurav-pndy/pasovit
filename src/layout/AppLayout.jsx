import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen p-4 md:p-5 flex flex-col">
      <Header />
      <main className="pt-19">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
