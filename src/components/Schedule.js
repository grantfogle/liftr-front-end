import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


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

    return schedule.map(activity => {
        return (
            // <Col className="schedule">
            //     <h4>{activity.day}</h4>
            //     <ul>
            //         <li>{activity.activity[0]}</li>
            //     </ul>
            // </Col>
            <div className="schedule">
                <h4>{activity.day}</h4>
                <p>{activity.activity[0]}</p>
            </div>
        )
    })
}

const Schedule = () => {
    return (
        <div className="calendar">
            {calendar()}
        </div>
    );
}

export default Schedule;