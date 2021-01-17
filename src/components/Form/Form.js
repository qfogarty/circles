import React from 'react';
import classes from './Form.module.scss';

const Form = (props) => {
    const { segments, setSegments, circleName, setCircleName } = props;
    return (
        <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>

            <label htmlFor="circle_name">Name:</label>
            <input type="text" name="circle_name" id="circle_name" onChange={(e) => setCircleName(e.target.value)} value={circleName} />

            <label htmlFor="circle_segments">Segments:</label>
            <input type="number" min="1" max="12" name="circle_segments" id="circle_segments" onChange={(e) => setSegments(e.target.value)}
                   value={segments} />

        </form>
    );
};

export default Form;
