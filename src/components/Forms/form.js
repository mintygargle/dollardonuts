import React from "react";
import styled from "styled-components";
import Button from "../Buttons/button";

const FormContainer = styled.form`
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  max-width: 50%;
  min-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  color: ${props => props.theme.primary_color};
  font-size: 18px;
`;

const Textbox = styled.input`
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  padding: 1em;
  color: ${props => props.theme.gray};
  font-size: 16px;
  transition: 0.4s;

  &:focus {
    border-color: ${props => props.theme.primary_color};
  }
`;

const Textarea = styled.textarea`
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  color: ${props => props.theme.gray};
  min-height: 120px;
  padding: 1em;
  font-size: 16px;
  transition: 0.4s;

  &:focus {
    border-color: ${props => props.theme.primary_color};
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  width: 90%;
`;

const SubmitButton = styled(Button)`
  margin: 0;
`;

const ReqSign = styled.span`
  content: "*";
  color: #ed254e;
`;

const Form = props => {
  return (
    <FormContainer>
      {props.children}
      <SubmitButton>Submit</SubmitButton>
    </FormContainer>
  );
};

export default Form;
export { Label, InputGroup, Textbox, Textarea, SubmitButton, ReqSign };
