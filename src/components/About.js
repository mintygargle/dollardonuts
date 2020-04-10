import React from "react";
import P from "./Text/Paragraph";

const About = () => {
  return (
    <section>
      <h1 className="page-title page-title--medium">About Us</h1>
      <section>
        <h2 className="heading heading--dark">Our Mission</h2>
        <h3 className="subheading subheading--dark">
          Bringing you the best donuts for the best price
        </h3>
        <P size="medium" color="dark gray">
          Dollar Donuts is dedicated to bringing fresh, scrumptious donuts to
          your community — and for only a fraction of what competitors charge.
          Each of our products are sold at the cheapest possible price, without
          sacrificing quality. Just as our founder, Phil D. O’Nut, once said,
          “Donuts are a comfort that everyone should enjoy - no matter how much
          is in their wallet.”
        </P>
      </section>

      <section>
        <h2 className="heading heading--dark">Our History</h2>
        <h3 className="subheading subheading--dark">Beginning in 2017</h3>
        <P size="medium" color="dark gray">
          Phil D. O’Nut founded Dollar Donuts in 2017. After successfully
          investing in a series of fast food chains, O’Nut wanted to bring a
          different kind of food to his community — one that evoked comfort,
          kindness, and warmth. He then started the first Dollar Donuts in
          Houston, TX with a singular mission: deliver affordable donuts to all,
          at the same quality as all the big-time brands.
        </P>
        <h3 className="subheading subheading--dark">
          Moving to 2020 and beyond
        </h3>
        <P size="medium" color="dark gray">
          And sure enough, O’Nut’s mission was a success. With over 20 Dollar
          Donut locations now available in the U.S, Americans are learning that
          you don’t always get what you pay for — sometimes you get even more!
        </P>
      </section>
    </section>
  );
};

export default About;
