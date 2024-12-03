import { Input } from "@/shared/ui/input";
import React from "react";
import Container from "./container";

const Header = () => {
  return (
    <Container>
      <header>
        <div className="header_top flex justify-between">
          <div className="logo">Logo</div>
          <div className="search-bar">
            <Input />
          </div>
          <div>asd</div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
