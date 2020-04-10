import React from "react";
import styled from "styled-components";
import Button from "../Buttons/button";
import { ReqSign } from "./form";

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
`;

const Textarea = styled.textarea`
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  color: ${props => props.theme.gray};
  min-height: 120px;
  padding: 1em;
  font-size: 16px;
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

const ContactForm = () => {
  return (
    <FormContainer>
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
      <InputGroup>
        <Label>Subject</Label>
        <Textbox></Textbox>
      </InputGroup>
      <InputGroup>
        <Label>
          Message<ReqSign>*</ReqSign>
        </Label>
        <Textarea required></Textarea>
      </InputGroup>
      <SubmitButton type="large">Submit</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
