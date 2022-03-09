import React from 'react';
import PropTypes from 'prop-types';

import { Title, Button, ControlsSection } from './FeedbackOptions.styled';

const Controls = ({options, onLeaveFeedback}) => (
  <ControlsSection>
    <Title>{onLeaveFeedback}</Title>
    <Button type="button" name="good" onClick={options}>
      Good
    </Button>
    <Button type="button" name="neutral" onClick={options}>
      Neutral
    </Button>
    <Button type="button" name="bad" onClick={options}>
      Bad
    </Button>
  </ControlsSection>
);

Controls.propTypes = {
  options: PropTypes.func,
  onLeaveFeedback: PropTypes.string,
}

export default Controls;
