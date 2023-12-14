import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FreebackOptions ({ options })  {
  return (
		<>
			{options.map((option) => (
				<button key={shortid.generate()} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};