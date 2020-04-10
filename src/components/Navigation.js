import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/privacy">Privacy</NavLink>
    </div>
  );
};

export default Navigation;
