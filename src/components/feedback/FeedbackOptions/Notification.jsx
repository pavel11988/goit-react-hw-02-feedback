import React from 'react';
import PropTypes from 'prop-types';

import { NotificationText } from './FeedbackOptions.styled';

const Notification = ({ message }) => {
    return(<NotificationText>{message}</NotificationText>)
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification;