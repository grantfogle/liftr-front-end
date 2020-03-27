import React, { Component } from 'react';
import Workout from './Goal/Goal';
import AddWorkout from './AddWorkout/AddWorkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Goals.scss';

class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWorkoutForm: false
        }
    }

    displayGoals() {
        let program = [
            {
                name: 'Push Workout',
                type: 'Bodyweight',
                day: 23,
                category: 'Strength',
                goal: {
                    exercise: 'pushups',
                    measurement: 'reps',
                    current: 35,
                    goal: 50,
                },
                startDate: 'Jan 1, 2020',
                endDate: 'Dec 21, 2020',
                frequency: ['Monday', 'Thursday'],
                workout: [
                    { name: 'pushups', reps: 10, sets: 4 },
                    { name: 'dips', reps: 10, sets: 4 },
                    { name: 'triangle pushups', reps: 10, sets: 4 },
                    { name: 'burpees', reps: 10, sets: 6 },
                ],
                day: 23
            },
            {
                name: 'Simple but Sinister',
                type: 'Kettlebell',
                category: 'Strength',
                goal: {
                    exercise: 'Turkish Getups',
                    measurement: 'kg',
                    current: 20,
                    goal: 30,
                },
                startDate: 'Jan 1, 2020',
                endDate: 'Dec 21, 2020',
                frequency: ['Tuesday', 'Friday'],
                workout: [
                    { name: 'One Arm kettlebell Swings', reps: 10, sets: 5 },
                    { name: 'Turkish Getups', reps: 2, sets: 5 },
                ],
                day: 16
            },
            {
                name: 'Pull Workout',
                type: 'Bodyweight',
                category: 'Strength',
                goal: {
                    exercise: 'Pullups',
                    measurement: 'reps',
                    current: 8,
                    goal: 20,
                },
                startDate: 'Jan 1, 2020',
                endDate: 'Dec 21, 2020',
                frequency: ['Tuesday', 'Friday'],
                workout: [
                    { name: 'Pullups', reps: 5, sets: 10 },
                    { name: 'Table Rows', reps: 20, sets: 5 },
                    { name: 'Curls', reps: 10, sets: 5 },
                    { name: 'Facepulls Rubberband', reps: 10, sets: 5 },
                ],
                day: 12
            },
            {
                name: 'Legs',
                type: 'Bodyweight',
                category: 'Strength',
                goal: {
                    exercise: 'Goblet Squat with 44lb db',
                    measurement: 'reps',
                    current: 8,
                    goal: 20,
                },
                startDate: 'Jan 1, 2020',
                endDate: 'Dec 21, 2020',
                frequency: ['Wednesday'],
                workout: [
                    { name: 'Goblet Squat', reps: 5, sets: 10 },
                    { name: '', reps: 20, sets: 5 },
                    { name: 'curls', reps: 10, sets: 5 },
                    { name: 'facepulls rubberband', reps: 10, sets: 5 },
                ],
                day: 16
            }
        ]
        return program.map((workout) => <Workout workout={workout} />);
    }

    toggleWorkoutForm = () =>  {
        console.log('cats');
        this.setState({showWorkoutForm: true});
    }

    showAddWorkoutForm() {
        if(this.state.showWorkoutForm) {
            return <AddWorkout />
        }
    }

    render() {
        return (
            <div className='goals'>
                <h2>Workouts for Week of March 20, 2020</h2>
                {this.displayGoals()}
                <div className={this.state.showWorkoutForm ? '' : 'goals__hideWorkoutForm'}>
                    <AddWorkout />
                </div>
                <div className="goals__add-goal d-flex align-content-center mt-2" onClick={this.toggleWorkoutForm}>
                    <button className="goals__add-goal__button mr-2">
                        <FontAwesomeIcon icon='plus' />
                    </button>
                    <h4 className="m-0 d-flex align-items-center">Add Workout</h4>
                </div>
            </div>
            );
        }
}

export default Goals;