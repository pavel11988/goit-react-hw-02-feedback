import React from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positiveFeedback: this.props.initialValue,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    this.setState(prevState => {
      return {
        total: prevState + 1,
      };
    });
  }

  //   countPositiveFeedbackPercentage() {
  //     this.setState(prevState => {
  //       return {
  //         positiveFeedback: 0,
  //       };
  //     });
  //   }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <Controls
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />
        <div>
          <h2>Statistic</h2>
          <p>
            Good:<span>{this.state.good}</span>
          </p>
          <p>
            Neutral:<span>{this.state.neutral}</span>
          </p>
          <p>
            Bad:<span>{this.state.bad}</span>
          </p>
          <p>
            Total:<span>{this.state.total}</span>
          </p>
          <p>
            Positive feedback:<span>{this.state.positiveFeedback}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
