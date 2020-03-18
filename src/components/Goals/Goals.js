import React from 'react';
import Goal from './Goal/Goal';
import './Goals.scss';

let currentGoals = [
    { name: 'Bench Press', category: 'Strength', currentStat: '185', goalStat: '420', timeline: 'Dec 21, 2020' },
    { name: 'Squat', category: 'Strength', currentStat: '225', goalStat: '315', timeline: 'Dec 21, 2020' },
    { name: 'Deadlift', category: 'Strength', currentStat: '305', goalStat: '405', timeline: 'Dec 21, 2020' },
    { name: 'Half Marathon', category: 'Cardio', currentStat: '2:21', goalStat: '2:00', timeline: 'Dec 21, 2020' },
    { name: 'Lose 10 Pounds', category: 'Weight Loss', currentStat: '185', goalStat: '175', timeline: 'Jan 21, 2021' },
];

let displayGoals = (goals) => goals.map((goal) => <Goal goal={goal} />);

const Goals = () => {
    return (
        <div class="goals">
            {displayGoals(currentGoals)}
        </div>
    );
}

export default Goals;