import React from 'react';
import './Goal.scss';

const Goal = ({ goal }) => {
    let { name, category, timeline, current } = goal;
    return (
        <div class="goal">
            <p>asdfasd</p>
            <h2>{name} <span>{category}</span></h2>
            <p>{timeline}</p>
            <p>{current}</p>
        </div >
    );
}

export default Goal;