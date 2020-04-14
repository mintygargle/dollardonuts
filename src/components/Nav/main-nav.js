import React, { useState, useRef } from "react";
import styled from "styled-components";
import LogoImg from "../../img/Logo.svg";
import { Burger, Menu, NavLink, useOnClickOutside } from "../index";

const MainNavContainer = styled.header`
  align-content: center;
  background-color: ${props => props.theme.secondary_color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  transition: 0.4s;
  width: 100%;
  height: 75px;
  padding: 1em;
  overflow: hidden;
  position: fixed;
  z-index: 2;

  a {
    font-size: 18px;
  }

  i {
    font-size: 50px;
    padding: 0;
    line-height: 0.7;
  }

  a,
  i {
    color: white;
    cursor: pointer;
  }

  a:hover,
  i:hover {
    color: ${({ theme }) => theme.accent};
  }

  .box {
    position: relative;
    padding: 0;
  }

  #hamburger {
    display: none;
    width: 0;
  }

  @media (max-width: ${props => props.theme.tablet}) {
    nav {
      width: 0;
      display: none;
    }

    #hamburger {
      display: unset;
      width: 20%;
    }

    .active {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a {
        padding: 1rem 0;
      }
    }
  }
`;

const LogoContainer = styled.div`
  width: 20%;
`;

const Logo = styled.img`
  position: absolute;
  bottom: 0;

  &:hover {
    color: ${props => props.theme.accent};
    filter: sepia(100%) saturate(300%) brightness(90%) hue-rotate(90deg);
  }
`;

const TitleContainer = styled.div`
  width: 40%;
  flex-position: bottom;

  @media (max-width: 890px) and (min-width: ${props => props.theme.tablet}) {
    display: none;
    width: 0;
  }

  @media (max-width: 400px) {
    display: none;
    width: 0;
  }
`;

const Title = styled.p`
  font-size: 24px;
  position: absolute;
  bottom: 2px;

  @media (max-width: ${props => props.theme.tablet}) {
    bottom: 0px;
    top: 5px;
  }
`;

const HamburgerContainer = styled.div`
  width: 20%;
  @media (max-width: ${props => props.theme.tablet}) {
    line-height: 0.8;
  }
`;

const LinkMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-position: bottom;

  a {
    padding: 0 1rem;
  }
`;

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <MainNavContainer ref={node}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <LogoContainer className="box" id="logo">
          <NavLink to="/">
            <Logo src={LogoImg}></Logo>
          </NavLink>
        </LogoContainer>
        <TitleContainer className="box" id="title">
          <Title>Dollar Donuts</Title>
        </TitleContainer>
        <LinkMenu id="link-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </LinkMenu>
        <HamburgerContainer>
          <Burger open={open} setOpen={setOpen}></Burger>
        </HamburgerContainer>
      </MainNavContainer>
      <Menu open={open} setOpen={setOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/privacy">Privacy</NavLink>
      </Menu>
    </div>
  );
};

export default MainNav;
