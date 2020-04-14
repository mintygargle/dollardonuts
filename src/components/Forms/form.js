import styled from "styled-components";
import { React, Button } from "../index";

const Dropdown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 8px;
  border: solid 2px #e5e5e5;
  color: ${props => props.theme.gray};
  font-size: 16px;
  padding: 1em;
  transition: 0.4s;
  width: 100%;

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

const FormContainer = styled.form`
  align-items: center;
  border-radius: 8px;
  border: solid 2px #e5e5e5;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 50%;
  min-width: 300px;
  padding: 1em;
`;

const FileUploader = styled.input`
  height: 100%;
  margin-bottom: 1em;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    background-color: ${props => props.theme.primary_color};
    border-color: ${props => props.theme.primary_color};
    border-radius: 16px;
    border-style: solid;
    border-width: 2px;
    box-shadow: none;
    color: white;
    content: "${props => props.text}";
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
    background-color: ${props => props.theme.primary_color};
    color: white;
  }

  &::after {
    content: "No file";
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  width: 90%;
`;

const Label = styled.label`
  color: ${props => props.theme.primary_color};
  font-size: 18px;

  &::after {
    content: "${props => {
      if (props.required) {
        return "*";
      }
    }}";
  }
  `;

const ReqSign = styled.span`
  color: ${props => props.theme.warning};
`;

const SubmitButton = styled(Button)`
  margin: 0;
`;

const Textbox = styled.input`
  border-radius: 8px;
  border: solid 2px #e5e5e5;
  color: ${props => props.theme.gray};
  font-size: 16px;
  padding: 1em;
  transition: 0.4s;

  &:focus {
    border-color: ${props => props.theme.primary_color};
  }
`;

const Textarea = styled.textarea`
  border-radius: 8px;
  border: solid 2px #e5e5e5;
  color: ${props => props.theme.gray};
  font-size: 16px;
  min-height: 120px;
  padding: 1em;
  transition: 0.4s;

  &:focus {
    border-color: ${props => props.theme.primary_color};
  }
`;

const Form = props => {
  return (
    <FormContainer>
      {props.children}
      <SubmitButton type="large">Submit</SubmitButton>
    </FormContainer>
  );
};

export {
  Form,
  Dropdown,
  FileUploader,
  InputGroup,
  Label,
  ReqSign,
  SubmitButton,
  Textarea,
  Textbox
};
