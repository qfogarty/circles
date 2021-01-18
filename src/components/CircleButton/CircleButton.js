import React from 'react';
import classes from './CircleButton.module.scss';
import PropTypes from 'prop-types';

const CircleButton = (props) => {

    const { alignment, children, onButtonClick = () => {} } = props;

    const classList = [classes.CircleButton];

    switch (alignment) {
        case 'top':
            classList.push(classes.CircleTop);
            break;
        case 'top-left':
            classList.push(classes.CircleTopLeft);
            break;
        case 'top-right':
            classList.push(classes.CircleTopRight);
            break;
        case 'bottom':
            classList.push(classes.CircleBottom);
            break;
        case 'bottom-left':
            classList.push(classes.CircleBottomLeft);
            break;
        case 'bottom-right':
            classList.push(classes.CircleBottomRight);
            break;
        default:
            classList.push(classes.CircleTop);
            break;
    }

    return (
        <div className={classList.join(' ')} onClick={() => {
            onButtonClick();

        }}>
            {children}
        </div>
    );
};

CircleButton.propTypes = {
    alignment: PropTypes.oneOf(['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right']).isRequired,
    children: PropTypes.any,
    onButtonClick: PropTypes.func
};
export default CircleButton;
