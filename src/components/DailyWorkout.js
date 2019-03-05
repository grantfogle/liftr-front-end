import React from 'react';
import Button from 'react-bootstrap/Button';

//today's date prop

const DailyWorkout = ({ }) => {
    return (
        <div class="daily-workout">
            <h2>Today's Workout: Lift Weights</h2>
            <h4>April 24th, 2019</h4>
            <ul>
                <li>Bench Press</li>
                <li>Squat</li>
                <li>Pullups</li>
                <li>Stretch</li>
            </ul>
            <Button>Complete</Button>
        </div>
    );
}

export default DailyWorkout;