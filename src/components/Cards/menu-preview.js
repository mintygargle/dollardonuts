import { React, Button, Background, NavLink } from "../index";
import styled from "styled-components";

const Container = styled(Background)`
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  height: 180px;
  margin: 0.6em;
  max-width: 280px;
  position: relative;
  width: 100%;
`;

const MenuPreviewButton = styled(Button)`
  border-radius: 0px 32px 0px 8px;
  box-shadow: none;
  bottom: 0%;
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0 auto;
  max-width: 100%;
  position: absolute;
  text-align: center;
  transition: 0.4s;
  width: 50%;
  z-index: 1;

  &:hover {
    border-radius: 0px 0px 8px 8px;
    transition: 0.4s;
    width: 100%;
  }
`;

const MenuPreviewCard = props => {
  return (
    <Container back={props.image}>
      <NavLink to="/menu">
        <MenuPreviewButton>{props.text}</MenuPreviewButton>
      </NavLink>
    </Container>
  );
};

export default MenuPreviewCard;
