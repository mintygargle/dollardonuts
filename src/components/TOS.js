import React from "react";
import P from "./Text/Paragraph";
import H1, { H2 } from "./Text/Heading";
import { NavLink } from "react-router-dom";
import HR from "./Text/horizontal-rule";

const TOS = () => {
  return (
    <section>
      <H1 className="page-title" color="green" size="large">
        Terms of Service
      </H1>
      <HR></HR>
      <P color="dark gray" size="medium">
        Please read these Terms of Serice carefully before using the
        <NavLink to="/"> http://www.dollardonuts.com</NavLink> website oprated
        by Michael Tanner.
      </P>
      <P color="dark gray" size="medium">
        Your access to and use of the Service is conditioned on your acceptance
        of and compliance with these Terms. These Terms apply to all visitors,
        users and others who access or use the Service.
      </P>
      <P color="dark gray" size="medium">
        By accessing or using the Service you agree to be bound by these Terms.
        If you disagree with any part of the terms then you may not access the
        Service.
      </P>
      <H2 color="green">Termination</H2>
      <P color="dark gray" size="medium">
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability, for any reason whatsoever, including without
        limitation if you breach the Terms.
      </P>
      <P color="dark gray" size="medium">
        All provisions of the Terms which by their nature should survive
        termination shall survive terminaton, including, without limitation,
        ownership provisions, warranty disclaimers, indemnity and limitations of
        liability.
      </P>
      <H2 color="green">Contact Us</H2>
      <P color="dark gray" size="medium">
        If you have any questions about these Terms, please{" "}
        <NavLink to="/contact">contact us</NavLink>.
      </P>
    </section>
  );
};

export default TOS;
