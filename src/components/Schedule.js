import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const calendar = () => {
    let schedule = [
        { day: 'Sunday', activity: ['Ski', '4 mile run'] },
        { day: 'Monday', activity: ['BJJ'] },
        { day: 'Tuesday', activity: ['Lift', 'BJJ'] },
        { day: 'Wednesday', activity: ['Rest'] },
        { day: 'Thursday', activity: ['BJJ', 'Lift'] },
        { day: 'Friday', activity: ['Rest'] },
        { day: 'Saturday', activity: ['Ski'] },
    ]
}

const Schedule = () => {
    return (
        <Row>
            {calendar()}
        </Row>
    );
}

export default Schedule;