import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Workout.scss';
import { array } from 'prop-types';

const Workout = ({ workout }) => {
    let {name, type, icon, score } = workout;
    return (
        <tr className="workout">
            <td className="workout__icon"><h3><FontAwesomeIcon icon={icon} /></h3></td>
            <td className="workout__name"><h3>{name}</h3></td>
            <td className="workout__score"><h4>{score}</h4></td>
            <td className="workout__type">{type}</td>
        </tr>
    )
}

export default Workout;