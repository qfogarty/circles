import React from 'react';
import classes from './Segment.module.scss';

const Segment = (props) => {

    const { i, rotation, degree, status, size } = props;
    const segmentGap = 10;
    const segmentSize = 0; //78.665;

    const segmentStyles = [classes.Segment];

    switch (status) {
        case 'lit':
            segmentStyles.push(classes.Lit);
            break;
        case 'broken':
            segmentStyles.push(classes.Broken);
            break;
        default:
            segmentStyles.push(classes.Unlit);
    }

    return (
        <div
            className={segmentStyles.join(' ')}
            key={`segment-${i}`}
            style={{
                height: `${size}px`,
                width: `${size}px`
            }}
        >

            {status === 'broken' && (
                <span style={{ zIndex: 1, transform: 'rotate(' + rotation + 'deg)' }}>
                    <span className={classes.icon}>X</span>
                </span>
            )}

            <div
                style={{
                    clipPath: `polygon(
                        calc(50% + ${segmentGap}px/2) 50%,
                        calc(50% + ${segmentGap}px/2) 0%,
                        100% 0%,
                        100% calc(${segmentSize}% - ${segmentGap}px/2),
                        50% calc(50% - ${segmentGap}px/2)
                    )`,
                    transform: 'rotate(' + rotation + 'deg)'
                }} />

        </div>
    );
};

export default Segment;
