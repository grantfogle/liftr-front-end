import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';

const goalProgress = () => {
    let goals = [
        {
            name: 'Bench Press',
            current: 185,
            goal: 225
        },
        {
            name: 'Squat',
            current: 205,
            goal: 265
        },
        {
            name: 'Deadlift',
            current: 275,
            goal: 315
        }
    ]

    return goals.map(goal => {
        let progress = (goal.current / goal.goal) * 100;
        return <ProgressBar className='progressBar' now={progress} label={goal.name + ' goal: ' + goal.goal} />
    })
}


const CurrentStats = () => {
    return (
        <div className='current-stats'>
            <h4>Goal Progress</h4>
            {goalProgress()}
        </div>
    );
}

export default CurrentStats;
