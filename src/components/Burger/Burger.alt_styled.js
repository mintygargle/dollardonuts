import styled from "styled-components";

export const AltStyledBurger = styled.button`
  position: absolute;
  bottom: 25%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 6rem;
  height: 3rem;
  background-color: ${props => props.theme.primary_color};
  box-shadow: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-width: 5px;
  position: fixed;
  border-radius: 16px 0px 0px 16px;
  top: 95px;
  transition: all 0.4s;
  right: 0px;
  z-index: 4;
  opacity: 0.8;

  ${props => (props.open ? "background-color: white" : "")};

  &:focus {
    outline: none;
  }

  &::before {
    content: "Menu";
    padding-left: 1.5rem;
    padding-top: 1rem;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: 0;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      width: 0;
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: 0;
    }
  }

  @media (min-width: ${props => props.theme.tablet}) {
    display: none;
    width: 0;
  }
`;
