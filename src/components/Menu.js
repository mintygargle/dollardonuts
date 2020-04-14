import donut from "../img/donut_placeholder.png";
import { React, P, MenuItemCard, SectionNav, styled } from "./index";

const CardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: fit-content;

  @media (min-width: ${props => props.theme.tablet}) {
    align-items: baseline;
    flex-direction: row;
    margin-bottom: 2em;
    width: 95%;
  }

  @media (min-width: ${props => props.theme.desktop}) {
    width: 90%;
  }
`;

const Menu = () => {
  return (
    <section>
      <h1 className="page-title">Menu</h1>
      <SectionNav></SectionNav>
      <h1 id="doughnuts">Doughnuts</h1>
      <P color="dark gray" size="medium">
        Our tasty donuts are fresh, warm and always affordable! With Dollar
        Donuts, your stomach, and your wallet, stay full.
      </P>
      <h2 id="glazed" className="subheading subheading--dark">
        Glazed
      </h2>
      <CardContainer>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
      </CardContainer>

      <h2 id="iced" className="subheading subheading--dark">
        Iced
      </h2>
      <CardContainer>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
      </CardContainer>
      <h2 id="filled" className="subheading subheading--dark">
        Filled
      </h2>
      <CardContainer>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
      </CardContainer>
      <h1 id="kolaches">Kolaches</h1>
      <P color="dark gray" size="medium">
        Who doesn’t love the warm taste of a kolache in the morning? Start your
        day right with a freshly baked Dollar Donut kolache.
      </P>
      <CardContainer>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
      </CardContainer>
      <h1 id="coffee">Coffee</h1>
      <P color="dark gray" size="medium">
        We all need a pick-me-up in the morning, and that’s why Dollar Donuts
        brings you quality coffee, grounded fresh all day long
      </P>
      <h2 id="hot-coffee" className="subheading subheading--dark">
        Hot Coffee
      </h2>
      <CardContainer>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
      </CardContainer>
      <h2 id="iced-coffee" className="subheading subheading--dark">
        Iced Coffee
      </h2>
      <CardContainer>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
        <MenuItemCard
          name="Sprinkle Delight"
          price="1.00"
          image={donut}
          ingredients={["Dough", "Sprinkles", "Joy"]}
          allergens={["None"]}
        ></MenuItemCard>
      </CardContainer>
    </section>
  );
};

export default Menu;
