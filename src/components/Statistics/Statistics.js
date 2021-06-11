import React from "react";
import PropTypes from "prop-types";

import "./Statistics.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className="statistics__option">
      Good: <span className="option">{good}</span>
    </p>
    <p className="statistics__option">
      Neutral: <span className="option">{neutral}</span>
    </p>
    <p className="statistics__option">
      Bad: <span className="option">{bad}</span>
    </p>
    <p className="statistics__option">
      Total: <span className="option">{total}</span>
    </p>
    <p className="statistics__option">
      Positive feedback: <span className="option">{positivePercentage}</span> %
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
