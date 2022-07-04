import PropTypes from 'prop-types';
import s from './button.module.css';


const Button = ({ onClick }) => {
    return (
        <button
            className={s.button}
            type="button"
            id="load-more"
            onClick={onClick}
        >
            Load more
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;