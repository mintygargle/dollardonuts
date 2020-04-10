import styled from "styled-components";

const H1 = styled.h1`
  color: ${props => {
    switch (props.color) {
      case "white":
        return props.theme.white;
      case "black":
        return props.theme.black;
      case "gray":
        return props.theme.gray;
      case "dark gray":
        return props.theme.dark_gray;
      case "green":
        return props.theme.primary_color;
      default:
        return "white";
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "1em";
      case "medium":
        return "1.5em";
      case "large":
        return "1.8em";
      default:
        return "1.5em";
    }
  }};
  padding-top: 1em;
  font-weight: bold;
  text-transform: unset;
  line-height: 1.1;
`;

const H2 = styled.h2`
  color: ${props => {
    switch (props.color) {
      case "white":
        return props.theme.white;
      case "black":
        return props.theme.black;
      case "gray":
        return props.theme.gray;
      case "dark gray":
        return props.theme.dark_gray;
      case "green":
        return props.theme.primary_color;
      default:
        return "white";
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "1em";
      case "medium":
        return "1.5em";
      case "large":
        return "1.8em";
      default:
        return "1.5em";
    }
  }};

  padding-top: 1em;
  text-transform: unset;
  line-height: 1.1;
`;

const H3 = styled.h3`
  color: ${props => {
    switch (props.color) {
      case "white":
        return props.theme.white;
      case "black":
        return props.theme.black;
      case "gray":
        return props.theme.gray;
      case "dark gray":
        return props.theme.dark_gray;
      case "green":
        return props.theme.primary_color;
      default:
        return "white";
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "1em";
      case "medium":
        return "1.5em";
      case "large":
        return "1.8em";
      default:
        return "1.5em";
    }
  }};
  padding-top: 1em;
  font-weight: lighter;
  text-transform: unset;
  line-height: 1.1;
`;

export default H1;

export { H2, H3 };
