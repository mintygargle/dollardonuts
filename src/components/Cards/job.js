import { React, Background, Button, NavLink } from "../index";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 320px;
  margin: 2em 0;
`;

const CardHeader = styled.div`
  background-color: ${props => props.theme.primary_color};
  border-radius: 16px 16px 0px 0px;
  padding-left: 1em;
  padding-top: 1em;
`;

const JobTitle = styled.h1`
  color: white;
  // background-color: black;
  line-height: 1;
`;

const Tagline = styled.p`
  padding: 1em 0;
  // background-color: blue;
  line-height: 1;
`;

const CardBackground = styled(Background)`
  height: 520px;
  position: relative;
  ${props => {
    switch (props.shift) {
      case "shift":
        return "background-position: 70% 50%;";
      default:
        return "";
    }
  }}
`;

const JobDescription = styled.div`
  background-color: ${props => props.theme.primary_color};
  border-radius: 0px 160px 0px 0px;
  bottom: 0;
  left: 0;
  max-height: 150px;
  opacity: 0.8;
  padding: 1em 0 1em 1em;
  position: absolute;
  width: fit-content;

  p {
    color: white;
    font-size: 15px;
    width: 75%;
  }
`;

const JobButton = styled(Button)`
  max-width: 100%;
  font-size: 24px;
  font-weight: bold;
`;

const JobCard = props => {
  return (
    <CardContainer>
      <CardHeader>
        <JobTitle>{props.title}</JobTitle>
        <Tagline>{props.tagline}</Tagline>
      </CardHeader>
      <CardBackground shift={props.shift} back={props.image}>
        <JobDescription>
          <p>{props.description}</p>
        </JobDescription>
      </CardBackground>
      <NavLink to="/apply">
        <JobButton type="flat-top">{props.button_text}</JobButton>
      </NavLink>
    </CardContainer>
  );
};

export default JobCard;
