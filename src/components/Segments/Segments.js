import React from 'react';
import Segment from './Segment/Segment';

const Segments = (props) => {

    const { totalSegments, size } = props;
    const segmentDegrees = 360 / totalSegments;

    const status = ['lit', 'unlit', 'broken'];

    // show different statuses randomly
    const randomStatus = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    return totalSegments > 0 && (
        <>
            {Array.from(new Array(totalSegments), (val, index) => {

                const rotation = Math.floor(index * segmentDegrees);

                return <Segment
                    size={size}
                    key={`segment-${index}`}
                    i={index}
                    rotation={rotation}
                    degree={segmentDegrees}
                    status={
                        status[randomStatus(status.length)]
                    } />;
            })}
        </>
    );
};

export default Segments;
