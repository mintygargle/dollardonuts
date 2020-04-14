import donuts from "../../img/donuts.jpg";
import coffee from "../../img/coffee.jpg";
import kolaches from "../../img/kolaches.png";
import styled from "styled-components";
import { React, P, MenuPreviewCard } from "../index";

const CardContainer = styled.div`
  margin: 0 auto;
  vertical-align: center;
  width: 320px;

  @media (min-width: ${props => props.theme.tablet}) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const MenuPreview = () => {
  return (
    <section className="menu-preview">
      <h1 className="heading heading--light">
        Delicious donuts, coffee and kolaches
      </h1>
      <P color="dark gray">
        Start your morning right with our menu of mouth-watering pastries and
        soothing hot coffee
      </P>
      <CardContainer>
        <MenuPreviewCard text="Donuts" image={donuts}></MenuPreviewCard>
        <MenuPreviewCard text="Coffee" image={coffee}></MenuPreviewCard>
        <MenuPreviewCard text="Kolaches" image={kolaches}></MenuPreviewCard>
      </CardContainer>
    </section>
  );
};

export default MenuPreview;
