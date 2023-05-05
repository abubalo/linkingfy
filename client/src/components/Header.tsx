import React from "react";
import { Link } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed w-full contianer  mx-auto flex justify-between items-center text-white top-0 p-4">
      <div className="text-lg font-bold">Short.ly</div>
      <nav className="flex justify-center items-center space-x-6 font-medium">
        <Link to={"/pricing"}>Pricing</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/support"}>Support</Link>
        <Link to={"/login"} className="px-6 py-2 border-white border-2 rounded-full">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
