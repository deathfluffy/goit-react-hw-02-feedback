import PropTypes from 'prop-types';
import css from './Notification.module.css';


export default function Notification  ( message ) {
 <span className={css.notification_message}>{message}</span>
}
 
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};