import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Buttons/button";
import Form, { InputGroup, Label, Textbox, ReqSign } from "./form";

const Dropdown = styled.select`
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  padding: 1em;
  color: ${props => props.theme.gray};
  font-size: 16px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: 0.4s;

  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${props => props.theme.primary_color} 50%
    ),
    linear-gradient(
      135deg,
      ${props => props.theme.primary_color} 50%,
      transparent 50%
    ),
    linear-gradient(to right, white, white);
  background-position: calc(100% - 20px) 50%, calc(100% - 15px) 50%, 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 100%;
  background-repeat: no-repeat;

  &:focus {
    background-image: linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      linear-gradient(
        to right,
        ${props => props.theme.primary_color},
        ${props => props.theme.primary_color}
      );
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 100%;
    background-repeat: no-repeat;
    border-color: ${props => props.theme.primary_color};
    outline: 0;
  }
`;

const FileUploader = styled.input`
  height: 100%;
  margin-bottom: 1em;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    background-color: ${props => props.theme.primary_color};
    box-shadow: none;
    border-radius: 16px;
    border-color: ${props => props.theme.primary_color};
    border-style: solid;
    border-width: 2px;
    content: "\nUpload Resume";
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: medium;
    padding: 0 0.5em;
    transition: 0.4s;
  }

  &:hover::before {
    background-color: white;
    color: ${props => props.theme.primary_color};
  }

  &:active::before {
    color: white;
    background-color: ${props => props.theme.primary_color};
  }

  &::after {
    content: "No file";
  }
`;

const SelectorContainer = styled.div`
  width: 100%;
`;

const ResponAccordion = props => {
  switch (props.jobType) {
    case "baker":
      return (
        <ul className="bullet-list">
          <li>Bake fresh goods every morning (doughnuts, kolaches)</li>
          <li>
            Prepare a variety of drinks for customers (coffee, iced coffee, tea)
          </li>
          <li>Maintain a clean kitchen and workspace</li>
          <li>Grind coffee and brew drinks throughout the day</li>
        </ul>
      );
    case "cashier":
      return (
        <ul className="bullet-list">
          <li>Welcome customers as they enter the shop</li>
          <li>Relay orders from customers to bakers</li>
          <li>
            Collect payment from customers and provide exact change, if
            necessary
          </li>
          <li>Check the accuracy of the cash drawer</li>
          <li>Maintain a tidy workspace in the storefront</li>
        </ul>
      );
    default:
      return <h1></h1>;
  }
};

const JobTypeSelector = () => {
  const [job, setJob] = useState("");

  return (
    <SelectorContainer>
      <InputGroup>
        <Label>
          Applying for:<ReqSign>*</ReqSign>
        </Label>
        <Dropdown required onChange={e => setJob(e.target.value)}>
          <option value="">Select a job</option>
          <option value="baker">Baker</option>
          <option value="cashier">Cashier</option>
        </Dropdown>
      </InputGroup>
      <InputGroup>
        <Label>Responsibilities:</Label>
        <ResponAccordion jobType={job} />
      </InputGroup>
    </SelectorContainer>
  );
};

const JobForm = () => {
  return (
    <Form>
      <InputGroup>
        <Label>
          Name<ReqSign>*</ReqSign>
        </Label>
        <Textbox required></Textbox>
      </InputGroup>
      <InputGroup>
        <Label>Phone</Label>
        <Textbox></Textbox>
      </InputGroup>
      <InputGroup>
        <Label>
          Email<ReqSign>*</ReqSign>
        </Label>
        <Textbox required></Textbox>
      </InputGroup>
      <JobTypeSelector />
      <InputGroup>
        <Label>
          Resume<ReqSign>*</ReqSign>
        </Label>
        <FileUploader required type="file"></FileUploader>
      </InputGroup>
    </Form>
  );
};

export default JobForm;
