import React from "react";
import Button from "../Buttons/button";
import Background from "../background";
import bg from "../../img/hiring_desktop.jpg";
import styled from "styled-components";
import P from "../Text/Paragraph";

const HireBG = styled(Background)`
  height: 430px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.back}) no-repeat center center fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (min-width: 1000px) {
    background-position: 25% 30%;
    background-size: cover;
    background-repeat: no-repeat;

    font-size: 1.6em;
  }

  @media (max-width: 340px) {
    p {
      font-size: 1em;
    }
  }
`;

const SectionHead = styled.h1`
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-top: 0.5em;
`;

const SectionCTA = styled.div`
  align-items: center;
  bottom: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 30%;
`;

const CTAButton = styled(Button)`
  padding: 1.2em 1.5em;
`;
const NowHiring = () => {
  return (
    <HireBG back={bg} className="now-hiring">
      <SectionHead className="heading heading--dark">
        Join Dollar Donuts!
      </SectionHead>
      <SectionCTA>
        <CTAButton>Apply Now!</CTAButton>
        <P size="medium">Now hiring for bakers and cashiers</P>
      </SectionCTA>
    </HireBG>
  );
};

export default NowHiring;
