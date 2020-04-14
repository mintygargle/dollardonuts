import { React, openPanel } from "../index";
import styled from "styled-components";

const CardContainer = styled.div`
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  height: fit-content;
  margin: 0.6em 0.4em;
  max-width: 245px;
  padding: 0.7em;
  width: 240px;

  .active {
    background-color: ${props => props.theme.primary_color};
    border-radius: 22px;
    color: white;
    transition: 0.4s;
  }

  .active::after {
    content: " -";
    color: white;
  }
`;

const NameContainer = styled.div`
  background-color: ${props => props.theme.primary_color};
  border: solid 1px ${props => props.theme.primary_color};
  border-radius: 32px;
  min-height: 60px;
  line-height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    // background-color: black;
    color: white;
    display: inline-block;
    font-size: 21px;
    line-height: normal;
    text-align: center;
    margin: 0 auto;
    vertical-align: middle;
    width: fit-content;
  }
`;

const PhotoContainer = styled.div`
  max-width: 140px;
  margin: 0 auto;
  padding: 0.5em;

  img {
    border-radius: 8px;
    max-width: 100%;
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 100%;
`;

const PriceContainer = styled.div`
  font-size: 24px;
  color: #2fa85f;
  margin-right: 16px;
  text-align: right;
  span {
    font-weight: bold;
  }
`;

const Accordion = styled.p`
  background-color: #ffffff00;
  color: black;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  text-align: right;
  transition: 0.4s;
  width: fit-content;

  &::after {
    content: " +";
    color: ${props => props.theme.primary_color};
  }

  &:hover {
    background-color: ${props => props.theme.primary_color};
    border-radius: 22px;
    color: white;
    transition: 0.4s;
  }
  &:hover::after {
    color: white;
  }
`;

const Panel = styled.div`
  font-size: 18px;
  color: black;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

const MenuItemCard = props => {
  return (
    <CardContainer>
      <NameContainer>
        <span>{props.name}</span>
      </NameContainer>
      <PhotoContainer>
        <img className="menu-item__photo" src={props.image} alt="" />
      </PhotoContainer>
      <CardFooter>
        <PriceContainer>
          <p>
            <span className="menu-item__dollar-sign">$</span>
            {props.price}
          </p>
        </PriceContainer>
        <Accordion onClick={e => openPanel(e)}>See Ingredients</Accordion>
        <Panel>
          <ul>
            {props.ingredients.map(ing => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </Panel>
        <Accordion onClick={e => openPanel(e)}>See Allergens</Accordion>
        <Panel>
          <ul>
            {props.allergens.map(all => (
              <li key={all}>{all}</li>
            ))}
          </ul>
        </Panel>
      </CardFooter>
    </CardContainer>
  );
};

export default MenuItemCard;
