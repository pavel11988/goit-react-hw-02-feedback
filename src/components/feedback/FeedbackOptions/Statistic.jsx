import React from 'react';
import PropTypes from 'prop-types';

import { StatisticSection, InfoLabel, InfoValue } from './FeedbackOptions.styled';

const Statistic = ({good, neutral, bad, total, positivePercentage}) => (
  <StatisticSection>
    <InfoLabel>
      Good:<InfoValue> {good}</InfoValue>
    </InfoLabel>
    <InfoLabel>
      Neutral:<InfoValue> {neutral}</InfoValue>
    </InfoLabel>
    <InfoLabel>
      Bad:<InfoValue> {bad}</InfoValue>
    </InfoLabel>
    <InfoLabel>
      Total:<InfoValue> {total}</InfoValue>
    </InfoLabel>
    <InfoLabel>
      Positive feedback:
      <InfoValue> {positivePercentage}%</InfoValue>
    </InfoLabel>
  </StatisticSection>
);

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistic;

