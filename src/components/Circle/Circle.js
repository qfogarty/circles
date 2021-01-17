import React from 'react';
import Ring from '../Ring/Ring';

import CircleName from '../CircleName/CircleName';
import Segments from '../Segments/Segments';

import { ReactComponent as Magnifier } from '../../assets/svg/magnifier.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';

const Circle = (props) => {

    const { title = '', totalSegments = 3, size = 220 } = props;

    return (
        <div style={{
            position: 'relative',
            width: `${size}px`,
            display: 'flex',
            justifyContent: 'center'
        }}>

            <CircleName title={title} size={size} />

            <Ring size={size} />

            <Segments totalSegments={totalSegments} size={size} />

            <div style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'space-around',
                width: '60%',
                bottom: '30%'
            }}>
                <Magnifier />
                <Arrow />
            </div>


        </div>
    );
};

export default Circle;
