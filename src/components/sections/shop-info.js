import React from "react";
import styled from "styled-components";
import bg from "../../img/shop_info_bg.jpg";
import Background from "../background";
import P from "../Text/Paragraph";

const ShopBG = styled(Background)`
  height: 430px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.back}) no-repeat center center fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em;
`;

const TextContainer = styled.div`
  margin-bottom: 6em;
`;

const Heading = styled.h1`
  color: white;
`;

const LineBreak = styled.hr`
  border-color: ${props => props.theme.primary_color};
  border-style: solid;
`;

const ShopInfo = () => {
  return (
    <ShopBG back={bg} className="shop-info">
      <TextContainer>
        <Heading>Our Shop</Heading>
        <LineBreak></LineBreak>
        <P size="medium">15015 Beechurst Dr, 77062, Houston, TX</P>
      </TextContainer>
      <TextContainer>
        <Heading>Hours</Heading>
        <LineBreak></LineBreak>
        <P size="medium">6:00 AM - 5:00 PM Mon-Fr</P>
        <P size="medium">6:00 AM - 3:00 PM Sat-Sun</P>
      </TextContainer>
    </ShopBG>
  );
};

export default ShopInfo;
