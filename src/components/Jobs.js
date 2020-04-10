import React from "react";
import JobCard from "./Cards/job";
import Baker from "../img/baker.jpg";
import Cashier from "../img/cashier.jpg";
import styled from "styled-components";
import P from "./Text/Paragraph";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${props => props.theme.tablet}) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const TextContainer = styled.div`
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;

  // @media (max-width: 570px) {
  //   width: 80%;
  // }
`;

const BannerText = styled.p`
  // background-color: black;
`;

const Jobs = () => {
  return (
    <div>
      <h1 className="page-title">JOBS</h1>
      <TextContainer>
        <P color="dark gray" size="medium">
          Dollar Donuts isn’t just about the baked goods and frothy drinks;{" "}
          <br></br>it’s about the people who make them.
        </P>
      </TextContainer>
      <br></br>
      <CardContainer>
        <JobCard
          title="Baker"
          tagline="No bakery is complete without its bakers"
          description="As a baker, you’ll be the heart of Dollar Donuts —  the one who provides a warm, comforting meal to all our hungry customers. "
          button_text="Become a Baker"
          image={Baker}
        ></JobCard>
        <JobCard
          title="Cashier"
          tagline="Be the face of Dollar Donuts"
          description="Customers need a friendly face to greet them.
        And we think you have the perfect smile."
          button_text="Become a Cashier"
          image={Cashier}
          shift="shift"
        ></JobCard>
      </CardContainer>
    </div>
  );
};

export default Jobs;
