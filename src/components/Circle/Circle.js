import React from 'react';
import classes from './Circle.module.scss';
import Ring from '../Ring/Ring';
import CircleName from '../CircleName/CircleName';
import Segments from '../Segments/Segments';
import { ReactComponent as Magnifier } from '../../assets/svg/magnifier.svg';
import { ReactComponent as Arrow } from '../../assets/svg/arrow.svg';
import CircleButton from '../CircleButton/CircleButton';

const Circle = (props) => {

    const { title = '', totalSegments = 3, size = 220 } = props;

    return (
        <div className={classes.Circle} style={{ width: `${size}px` }}>

            <Ring size={size} />

            <Segments totalSegments={totalSegments} size={size} />

            <div className={classes.CircleButtonGroup}>

                <CircleButton alignment={'top'}>
                    <CircleName title={title} size={size} />
                </CircleButton>

                <CircleButton alignment={'bottom-left'} onButtonClick={() => {
                    console.log('Magnify')
                }}>
                    <Magnifier />
                </CircleButton>

                <CircleButton alignment={'bottom-right'} onButtonClick={() => {
                    console.log('Arrow')
                }}>
                    <Arrow />
                </CircleButton>

            </div>

        </div>
    );
};

export default Circle;
