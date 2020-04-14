import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Burger, Menu, useOnClickOutside, AltStyledBurger } from "../index";

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
