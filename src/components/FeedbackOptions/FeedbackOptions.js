import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import "./FeedbackOptions.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((option) => (
    <button
      className="option__button"
      key={shortid.generate()}
      type="button"
      onClick={onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
