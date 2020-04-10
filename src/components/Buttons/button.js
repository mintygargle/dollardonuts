import styled from "styled-components";

// Types:
//   primary
//   secondary
//   flat-top
//   flat--bottom
//   large
//   lower-left-corner

const Button = styled.button`
  background-color: ${props => props.theme.primary_color};
  box-shadow: none;
  border-radius: 16px;
  border-color: ${props => props.theme.primary_color};
  border-style: solid;
  border-width: 2px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: medium;
  max-width: fit-content;
  width: 100%;

  &:hover {
    background-color: white;
    color: ${props => props.theme.primary_color};
  }

  &:active {
    color: white;
    background-color: ${props => props.theme.primary_color};
  }

  @media (max-width: ${props => props.theme.tablet}) {
    &:active {
      background-color: white;
      color: ${props => props.theme.primary_color};
    }
  }

  ${props => {
    switch (props.type) {
      case "primary":
        return "text-transform: uppercase;";

      case "secondary":
        return "background-color: white; color: #2fa85f;";

      case "flat-bottom":
        return "border-radius: 16px 16px 0px 0px;";

      case "flat-top":
        return "border-radius: 0px 0px 16px 16px;";

      case "lower-left-corner":
        return `        
        border-radius: 0px 32px 0px 0px;
        bottom: 0;
        left: 0;
      
        position: absolute;
        transition: 0.4s ease-in;
        min-width: fit-content;
        width: 30%;
        max-width: 100%;

        &:hover {
          width: 35%;
        }

 
        `;

      case "large":
        return `
        max-width: 250px;
        font-size: 36px;
        text-transform: uppercase;`;
      default:
        return;
    }
  }}
`;

export default Button;
