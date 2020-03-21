import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Goal.scss';

const getPercentage = (numerator, denominator) => {
    let num = (numerator / denominator).toFixed(2) * 100;
    return num + '%';
}

const Workout = ({ workout }) => {
    let { name, category, timeline, currentStat, goalStat } = workout;
    return (
        <div className='workout'>
            <div className="workout__headline">
                <div className="workout__headline__title">
                    <h4>{name} <span>{category}</span></h4>
                    <p className='text-secondary'>Due Date: {timeline}</p>
                </div>
                <div className='workout__headline__stats'>
                    <p className=''>{getPercentage(currentStat, goalStat)}</p>
                    <button className='workout__headline__stats__button'>View Progress</button>
                    <FontAwesomeIcon icon='ellipsis-v' />
                </div>
            </div>
            <div className='workout__view'>

            </div>
        </div>
    );
}

export default Workout;