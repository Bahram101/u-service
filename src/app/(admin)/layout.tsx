import Footer from "@/shared/components/layouts/admin/footer";
import Header from "@/shared/components/layouts/admin/header";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AdminLayout;
