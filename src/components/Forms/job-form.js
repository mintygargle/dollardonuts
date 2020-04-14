import React, { useState } from "react";
import {
  Form,
  InputGroup,
  Label,
  Textbox,
  ReqSign,
  Dropdown,
  FileUploader
} from "./form";

const ResponsibilityList = props => {
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
    <div className="full-width">
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
        <ResponsibilityList jobType={job} />
      </InputGroup>
    </div>
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
        <FileUploader required type="file" text="Upload Resume"></FileUploader>
      </InputGroup>
    </Form>
  );
};

export default JobForm;
