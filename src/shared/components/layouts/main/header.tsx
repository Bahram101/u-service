import { Input } from "@/shared/ui/input";
import React from "react";
import Container from "./container";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
   
      <header>
        <div className="bg-[#F0F2F3]">
          <Container>
            <div className="header_top flex justify-between h-[64px] items-center">
              <div className="logo">Logo</div>
              <div className="search-bar flex items-center relative">
                <Input className="bg-[#] w-[400px] border-0 shadow-none" />
                <CiSearch className="absolute right-2" size={20} />
              </div>
              <div className="flex items-center">
                <div className="headerButtons">
                  <PiShoppingCartSimple />
                  <div className="text-xs pl-1">Cart</div>
                </div>
                <div className="headerButtons ml-3">
                  <MdFavoriteBorder />
                </div>
                <div className="headerButtons ml-3">
                  <AiOutlineUser />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="header_bottom flex justify-between py-3">
            <div className="header_bottom-left flex">
              <div className="categories border flex items-center text-sm  p-2 rounded-md">
                <RxHamburgerMenu className="mr-2" />
                <div>All Categories</div>
              </div>
              <nav className="menu flex items-center">
                <ul className="flex items-center text-sm">
                  <li className="menuItem">Home</li>
                  <li className="menuItem">Shop</li>
                  <li className="menuItem">Product</li>
                  <li className="menuItem">Pages</li>
                  <li className="menuItem">About</li>
                </ul>
              </nav>
            </div>
            <div className="flex header_bottom-right text-sm">
              <div>Contact:</div>
              <div>(808) 555-0111</div>
            </div>
          </div>
        </Container>
      </header>
     
  
  );
};

export default Header;
