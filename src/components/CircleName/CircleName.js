import React from 'react';
import classes from './CircleName.module.scss';

const CircleName = ({ title, arc = 120, size }) => {

    const radius = size / 3;
    const characters = title.split('');
    const degree = arc / characters.length;

    return (
        <h1 className={classes.CircleName}>
            {characters.map((letter, i) => (
                <span
                    key={`letter-${i}`}
                    style={{
                        height: `${radius}px`,
                        transform: `rotate(${degree * i - arc / 2}deg)`,
                        transformOrigin: `0 ${radius}px 0`
                    }}
                    className={classes.CircleChar}>{letter}</span>
            ))}
        </h1>
    );

};

export default CircleName;
