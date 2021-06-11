import React, { Component } from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (feedback) => () =>
    this.setState({ [feedback]: this.state[feedback] + 1 });

  countTotalFeedback = (feedbacks) =>
    feedbacks.reduce((total, feedback) => total + this.state[feedback], 0);

  countPositiveFeedbackPercentage = (totalFeedback) => {
    return totalFeedback === 0
      ? totalFeedback
      : Math.round((this.state.good * 100) / totalFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbacks = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback(feedbacks);
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(totalFeedback);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbacks}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
