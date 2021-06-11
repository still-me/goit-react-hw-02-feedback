import React from "react";
import PropTypes from "prop-types";

import "./Section.scss";

const Section = ({ title, children }) => (
  <section>
    <h2 className="section__title">{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
