import React from 'react';
import PropTypes from 'prop-types';

import { Title, Button, ControlsSection } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <ControlsSection>
    <Title>{ }</Title>
    {options.map((option, id) => {
      return (
        <Button key={id} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </Button>)
    })
    }
  </ControlsSection>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;
