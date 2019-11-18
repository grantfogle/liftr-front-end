import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Workout from './Workout/Workout';
import './Workouts.scss';
import { array } from 'prop-types';

function loadWorkouts(arr) {
    let filteredArr = arr.map(workout => {
        return <Workout workout={workout}/>;
    })
    return filteredArr;
}
let workoutLists = [
    {id: 1, name:'5-3-1', type: 'Strength', score: 4.9, icon: 'dumbbell'},
    {id: 2, name:'Starting Strength', type: 'Strength', score: 3.8, icon: 'dumbbell'},
    {id: 3, name:'Couch to 5k', type: 'Cardio', score: 4.2, icon: 'running'},
    {id: 4, name:'Bjj Class', type: 'MMA', score: 3.0, icon: 'running'},
    {id: 5, name:'Bodyweight HIIT', type: 'Work Capacity', score: 4.1, icon: 'dumbbell'},
    {id: 6, name:'My First Marathon', type: 'Cardio', score: 4.8, icon: 'running'},
]

const Workouts = () => {
    return (
        <div className="workouts">
            <table>
                <tr>
                    <th className="workouts__icon-header"></th>
                    <th className="workouts__name-header">Workout</th>
                    <th className="workouts__score-header">Score (1-5)</th>
                    <th className="workouts__type-header">Type</th>
                </tr>
            </table>
            {loadWorkouts(workoutLists)}
            
        </div>
    )
}

export default Workouts;