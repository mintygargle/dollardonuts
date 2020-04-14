import React from "react";
import { Form, InputGroup, Label, Textbox, Textarea, ReqSign } from "./form";

const ContactForm = () => {
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
    </Form>
  );
};

export default ContactForm;
