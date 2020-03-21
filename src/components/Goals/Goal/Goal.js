import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Goal.scss';

const getPercentage = (numerator, denominator) => {
    let num = (numerator / denominator).toFixed(2) * 100;
    return num + '%';
}

class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWorkout: false,
        }
    }
    toggleWorkoutView = () => {
        this.setState({ showWorkout: !this.state.showWorkout });
    };
    showWorkout() {
        if (this.state.showWorkout) {
            return (
                <div className='workout__view'>
                    <h4>Workout bruh</h4>
                </div>
            )
        }
    }
    render() {
        const { name, category, timeline, currentStat, goalStat } = this.props.workout;
        return (
            <div className='workout' onClick={this.toggleWorkoutView}>

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
                {this.showWorkout()}
            </div>
        );
    }
}

export default Workout;