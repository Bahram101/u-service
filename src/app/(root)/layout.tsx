import React from "react";
import Footer from "@/shared/components/layouts/main/footer";
import Header from "@/shared/components/layouts/main/header";
import Container from "@/shared/components/layouts/main/container";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
