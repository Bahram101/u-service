import Footer from "@/shared/components/layouts/main/footer";
import Header from "@/shared/components/layouts/main/header";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
