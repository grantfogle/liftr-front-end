import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Goal.scss';
import { array } from 'prop-types';

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

    showWorkout(workout) {
        if (this.state.showWorkout) {
            return (
                <div className='workout__view'>
                    {workout.map(exercise => {
                        return (
                            <div>{exercise.name}</div>
                        );
                    })}
                </div>
            )
        }
    }

    getPercentage(numerator, denominator) {
        let num = (numerator / denominator).toFixed(2) * 100;
        return num + '%';
    }

    render() {
        const { name, type, category, goal, startDate, endDate, frequency, workout, day } = this.props.workout;
        return (
            <div className='workout' onClick={this.toggleWorkoutView}>
                <div className="workout__headline">

                    <div className="workout__headline__title">
                        <h4>{name}</h4>
                        <p className='text-secondary'>Day: {day}</p>
                    </div>

                    <div className='workout__headline__stats'>
                        <p className=''>{this.getPercentage(goal.current, goal.goal)}</p>
                        <button className='workout__headline__stats__button'>View Progress</button>
                        <FontAwesomeIcon icon='ellipsis-v' />
                    </div>

                </div>
                {this.showWorkout(workout)}
            </div>
        );
    }
}

export default Workout;