import styled from "styled-components";
import { React, NavLink, P, ContactForm } from "./index";

const TextContainer = styled.div`
  max-width: 50%;
  min-width: 300px;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <section>
      <h1 className="page-title">Get in Touch!</h1>
      <TextContainer>
        <P size="medium" color="dark gray">
          Have any questions for us?
        </P>

        <P size="medium" color="dark gray">
          Just fill out the form below and you can expect a response in 48 hours
          or less!
        </P>

        <P size="medium" color="dark gray">
          If you need a more immediate answer to your questions, see if our{" "}
          <span>
            <NavLink to="/faq">FAQ page</NavLink>
          </span>{" "}
          has what you’re looking for.
        </P>

        <P size="medium" color="dark gray">
          Or call us at{" "}
          <span>
            <a href="#phone">555-555-5555</a>
          </span>
          !
        </P>
        <br></br>
      </TextContainer>

      <ContactForm></ContactForm>
    </section>
  );
};

export default Contact;
