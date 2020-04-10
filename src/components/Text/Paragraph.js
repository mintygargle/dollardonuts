import styled from "styled-components";

const P = styled.p`
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
      default:
        return "white";
    }
  }};

  font-size: ${props => {
    switch (props.size) {
      case "small":
        return "0.7em";
      case "medium":
        return "1.3em";
      case "large":
        return "1.6em";
      default:
        return "1em";
    }
  }};

  margin-bottom: 0.6em;
  font-weight: lighter;
  line-height: 1.6em;
`;

export default P;
