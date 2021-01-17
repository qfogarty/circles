import React, { useState } from 'react';
import './styles.scss';
import Circle from './components/Circle/Circle';
import Form from './components/Form/Form';

function App() {

    const [circleName, setCircleName] = useState('Circle Name');
    const [segments, setSegments] = useState(8);

    return (
        <>
            <Form circleName={circleName} setCircleName={setCircleName} segments={segments} setSegments={setSegments} />

            <Circle totalSegments={segments} title={circleName} />

        </>
    );
}

export default App;
