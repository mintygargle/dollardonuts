import React, { useState, useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";
import Menu from "../B_Menu/Menu";
import { useOnClickOutside } from "../../hook";
import { AltStyledBurger } from "../Burger/Burger.alt_styled";

const SectionNavContainer = styled.div`
  align-items: flex-start;
  border-radius: 0px 0px 16px 16px;
  padding: 0.6em;
  // position: fixed;
  // top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${props => props.theme.primary_color};
  width: 100%;
`;

const SectionNavBody = styled.div`
  background-color: $color-primary;
  border-radius: 16px 0px 0px 16px;
  margin-top: 1em;
  margin-bottom: 1em;
  width: fit-content;
  padding: 0.3em 1em;
  position: sticky;
  float: right;
  top: 100px;
  z-index: 1;
`;

const MainSectionLink = styled.a`
  font-size: 24px;
  font-weight: lighter;
`;

const SubsectionLink = styled.a`
  padding-left: 1em;
  font-size: 18px;
  font-weight: lighter;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: white;
  }
`;

const SectionNav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} Style={AltStyledBurger}></Burger>
      <Menu open={open} setOpen={setOpen}>
        <LinkContainer>
          <MainSectionLink>
            <a href="#doughnuts">Doughnuts</a>
          </MainSectionLink>
          <SubsectionLink>
            <a href="#glazed">Glazed</a>
          </SubsectionLink>
          <SubsectionLink>
            <a href="#iced">Iced</a>
          </SubsectionLink>
          <SubsectionLink>
            <a href="#filled">Filled</a>
          </SubsectionLink>
        </LinkContainer>

        <LinkContainer>
          <MainSectionLink>
            <a href="#kolaches">Kolaches</a>
          </MainSectionLink>
        </LinkContainer>

        <LinkContainer>
          <MainSectionLink>
            <a href="#coffee">Coffee</a>
          </MainSectionLink>
          <SubsectionLink>
            <a href="#hot-coffee">Hot Coffee</a>
          </SubsectionLink>
          <SubsectionLink>
            <a href="#iced-coffee">Iced Coffee</a>
          </SubsectionLink>
        </LinkContainer>
      </Menu>
    </div>
  );
};

export default SectionNav;
