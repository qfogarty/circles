import React from 'react';
import classes from './Ring.module.scss';

const Ring = (props) => {

    const { size = 220 } = props;

    return (
        <div className={classes.Ring} style={{ width: size + 'px', height: size + 'px' }} />
    );
};

export default Ring;
