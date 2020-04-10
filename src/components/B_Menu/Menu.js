import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { NavLink } from "react-router-dom";

const Menu = ({ open, children }) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
