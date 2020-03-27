import React, { Component } from 'react';
import './AddWorkout.scss';

class AddWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                type: '',
                category: '',
                goal: {
                    exercise: '',
                    measurement: '',
                    current: 0,
                    goal: 0,
                },
                startDate: '',
                endDate: '',
                frequency: [''],
                workout: [{ name: '', reps: 0, sets: 0 }],
        }
    }
    render() {
        return (
            <div className='add-workout-form'>
                <h4>Create a New Workout</h4>
                <form>
                    <div className="add-workout-form__section">
                        <label>Name</label>
                        <input placeholder="Gainz for God" type="text"></input>
                        <label>Type</label>
                        <select id="type" name="type">
                            <option  value="bodyweight">Bodyweight</option>
                            <option  value="kettlebells">Kettlebells</option>
                            <option  value="barbell">Barbell</option>
                            <option  value="dumbbell">Dumbbell</option>
                            <option  value="cardio">Cardio</option>
                        </select>
                    </div>
                    <div className="add-workout-form__section">
                        <input placeholder="Goal Name" type="text"></input>
                        <input placeholder="Current" type="text"></input>
                        <input placeholder="Goal" type="text"></input>
                        <select id="type" name="type">
                            <option  value="weight">Pounds</option>
                            <option  value="reps">Reps</option>
                            <option  value="time">Minutes</option>
                        </select>
                    </div>
                    <div className="add-workout-form__section add-workout-form__workout">
                        <h5>Enter Workout Below:</h5>
                            <div className="add-workout-form__workout__row">
                            <input className="add-workout-form__workout__row__name" placeholder="Exercise" type="text"></input>
                            <input placeholder="Weight" type="text"></input>
                            <input placeholder="Reps" type="text"></input>
                            <input placeholder="Sets" type="text"></input>
                            <select id="type" name="type">
                                <option  value="pounds">Pounds</option>
                                <option  value="reps">Reps</option>
                                <option  value="time">Minutes</option>
                            </select>
                            <button>Delete</button>
                        </div>
                        <button>Add row</button>
                    </div>
                    <button >Submit</button>
                </form>
            </div>
        );
    }
}

export default AddWorkout;