import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Goal.scss';

const getPercentage = (numerator, denominator) => {
    let num = (numerator / denominator).toFixed(2) * 100;
    return num + '%';
}

const Goal = ({ goal }) => {
    let { name, category, timeline, currentStat, goalStat } = goal;
    return (
        <div className='goal'>
            <div>
                <h4>{name} <span>{category}</span></h4>
                <p className='text-secondary'>Due Date: {timeline}</p>
            </div>
            <div className='goal__stats'>
                <p className=''>{getPercentage(currentStat, goalStat)}</p>
                <button className='goal__stats__button'>View Progress</button>
                <FontAwesomeIcon icon='ellipsis-v' />
            </div>
        </div>
    );
}

export default Goal;