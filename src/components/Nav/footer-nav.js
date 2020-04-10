import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 1em;

  a,
  p,
  h1 {
    color: white;
    font-size: 18px;
  }

  a:hover {
    color: ${props => props.theme.accent};
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`;
const ExploreLinks = styled.div`
  display: flex;
  flex-direction: column;
`;
const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;
const CopyrightContainer = styled.div`
  padding-top: 1em;
  padding-left: 1em;
`;

const FooterHeading = styled.h1`
  text-transform: unset;
  letter-spacing: 0.1;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const FooterNav = () => {
  return (
    <FooterContainer>
      <LinkContainer>
        <ExploreLinks>
          <FooterHeading>Explore</FooterHeading>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <NavLink to="/tos">Terms of Use</NavLink>
        </ExploreLinks>
        <SocialLinks>
          <FooterHeading>Follow Us!</FooterHeading>
          <a href="#fb" className="active">
            Facebook
          </a>
          <a href="#twitter">Twitter</a>
        </SocialLinks>
      </LinkContainer>
      <CopyrightContainer>
        <Copyright>©2020 Dollar Donuts LLC</Copyright>
      </CopyrightContainer>
    </FooterContainer>
    // <footer className="footer-nav">
    //   <div className="footer-nav__links-container">
    //     <div className="footer-nav__explore-links">
    //       <h1 className="footer-nav__heading">Explore</h1>
    //       <NavLink to="/about">About Us</NavLink>
    //       <NavLink to="/contact">Contact Us</NavLink>
    //       <NavLink to="/privacy">Privacy</NavLink>
    //       <NavLink to="/tos">Terms of Use</NavLink>
    //     </div>
    //     <div className="footer-nav__social-links">
    //       <h1 className="footer-nav__heading">Follow Us!</h1>
    //       <a href="#fb" className="active">
    //         Facebook
    //       </a>
    //       <a href="#twitter">Twitter</a>
    //     </div>
    //   </div>
    //   <div className="footer-nav__copyright-container">
    //     <p className="footer-nav__copyright">©2020 Dollar Donuts LLC</p>
    //   </div>
    // </footer>
  );
};

export default FooterNav;
