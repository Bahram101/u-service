import Footer from "@/components/layouts/main/footer";
import Header from "@/components/layouts/main/header";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;