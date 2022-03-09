import React from 'react';

import Controls from '../FeedbackOptions/Controls';
import Statistic from '../FeedbackOptions/Statistic';
import Notification from '../FeedbackOptions/Notification';

import { Title, Container } from './Feedback.styled';

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

  handleIncrement = e => {

    switch (e.target.name) {
      case 'good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;

      case 'bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;

      default:
        return;
    }

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
    
  };

  countPositiveFeedbackPercentage() {
    this.setState(({ total, good }) => {
      return {
        positiveFeedback: Math.round((good / total) * 100),
      };
    });
  };

  render() {
    return (
      <Container>
        <Controls
          options={this.handleIncrement}
          onLeaveFeedback={'Please leave feedback'}
        />
         <Title>Statistic</Title>
        {
          this.state.total > 0 ?
          (<Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positiveFeedback}
          />)
          :
          (<Notification message="There is no feedback" />)
        }
        
      </Container>
    )};
}

export default Feedback;
