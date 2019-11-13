import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Workouts.scss';
import { array } from 'prop-types';

loadWorkouts = (str) => {
    let filteredArr = getArr.filter(workout => {
        return <Workout workout={{workout}}/>;
    })
}

const Workouts = ({ searchString }) => {
    return (
        <div class="workouts">
            {{loadWorkouts(searchString)}}
        </div>
    )
}

export default Workouts;