import React from "react";
import Button from "../Buttons/button";
import bg from "../../img/hero_bg.jpg";
import bg_wide from "../../img/hero_bg_wide.jpg";
import styled from "styled-components";
import Background from "../background";
import { NavLink } from "react-router-dom";
import P from "../Text/Paragraph";

const HeroBG = styled(Background)`
  height: 430px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.back}) no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (min-width: 580px) {
    background-position: 50% 25%;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    background-position: 50% 50%;

    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${props => props.back_wide}) no-repeat center center fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${props => props.back_wide}) no-repeat center center fixed;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  padding-top: 1.6rem;

  @media (min-width: ${props => props.theme.tablet}) {
    background-color: #2fa85fee;
    border-radius: 0px 0px 0px 64px;
    display: flex;
    flex-direction: column;
    padding-left: 4rem;

    justify-content: space-around;
  }
`;

const RedBG = styled.div`
  background-color: red;
`;

const Hero = () => {
  return (
    <HeroBG back={bg} className="hero" back_wide={bg_wide}>
      <TextContainer>
        <div>
          <p className="site-title">Dollar Donuts</p>
          <P>The bigger the savings, the sweeter the taste</P>
        </div>
      </TextContainer>

      <NavLink to="/menu">
        <Button type="lower-left-corner">View Our Menu</Button>
      </NavLink>
    </HeroBG>
  );
};

export default Hero;
