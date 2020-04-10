import React from "react";
import openAcc from "../openAcc";
import P from "./Text/Paragraph";
import H1 from "./Text/Heading";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Panel = ({ className, children, title }) => {
  return (
    <div className={className}>
      <H1 onClick={e => openAcc(e)} color="green" size="medium">
        {title}
      </H1>
      <div className="content">{children}</div>
    </div>
  );
};

const Accordion = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const FAQPanel = styled(Panel)`
  border-radius: 8px;
  cursor: pointer;
  padding: 1em;
  transition: 0.4s;

  &:hover {
    background-color: whitesmoke;
  }

  .content {
    transition: max-height 0.2s ease-out;
    max-height: 0;
    overflow: hidden;
  }
`;

const FAQAcc = styled(Accordion)`
  border: solid 2px whitesmoke;
  border-radius: 8px;
  padding: 1em;

  h1 {
    padding-top: 0;
  }
`;

const FAQ = () => {
  return (
    <section>
      <FAQAcc>
        <H1 color="green" className="page-title">
          FAQ
        </H1>
        <FAQPanel title="What can I buy at Dollar Donuts?">
          <P color="dark gray" size="medium">
            Well, not just Donuts! We serve everything from coffee to kolaches.
            Check out our <NavLink to="/menu">menu</NavLink> for more tasty
            options!
          </P>
        </FAQPanel>
        <FAQPanel title="How much does a donut cost here at Dollar Donuts?">
          <P color="dark gray" size="medium">
            Really now
          </P>
        </FAQPanel>
        <FAQPanel title="Are you hiring?">
          <P color="dark gray" size="medium">
            We are hiring for bakers and cashiers right now! Visit our{" "}
            <NavLink to="/jobs">Jobs page</NavLink> for more information.
          </P>
        </FAQPanel>
      </FAQAcc>
    </section>
  );
};

export default FAQ;
