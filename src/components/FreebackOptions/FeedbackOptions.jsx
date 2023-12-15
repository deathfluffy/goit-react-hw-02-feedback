import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FeedbackOptions ({ options })  {
  return (
		<OptionsList>
		  {options.map((option) => (
				<OptionsItem key={option}>
				<button key={shortid.generate()} type="button" name={option}  onClick={() => onLeaveFeedback(option)}>
					{option}
				  </button>
				</OptionsItem>
			))}
		</OptionsList>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};