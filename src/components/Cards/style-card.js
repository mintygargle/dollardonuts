import React from "react";
import styled from "styled-components";

const Head = styled.div`
  background-color: gray;
  color: whitesmoke;
  padding: 0.25em 0.5em;
`;

const Body = styled.div`
  background-color: white;
  color: black;
  padding: 0.5em;
`;

const Footer = styled.div`
  background-color: blue;
  color: whitesmoke;
  padding: 0.25em 0.5em;
`;

const Card = () => {
  return (
    <div>
      <Head>Heading</Head>
      <Body>Body text</Body>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Card;
