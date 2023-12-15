import PropTypes from 'prop-types';

import { NotificationText } from './Notification.module';

export default function Notification  ( message ) {
 <NotificationText>{message}</NotificationText>
}
 
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};