import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default InnerLayout;
