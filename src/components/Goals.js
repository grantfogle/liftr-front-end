import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table'
import DailyWorkout from './DailyWorkout';
import '../App.css';


const goalProgess = () => {
    let goals = [
        {
            name: 'Bench Press',
            current: 185,
            goal: 225
        },
        {
            name: 'Squat',
            current: 205,
            goal: 265
        },
        {
            name: 'Deadlift',
            current: 275,
            goal: 315
        }
    ]

    return goals.map(goal => {
        let progress = (goal.current / goal.goal) * 100;
        return <ProgressBar className="progressBar" now={progress} label={goal.name + ' goal: ' + goal.goal} />
    })
}

const workout = () => {
    if (this.props.dailyWorkout) {

    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Weight/Intensity</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Rest (s)</th>
                    <th>Complete?</th>
                </tr>
            </thead>
            {this.props.dailyWorkout.map(exercise => {
                return (
                    <tr>
                        <td>exercise.name</td>
                        <td>exercise.intensity</td>
                        <td>exercise.sets</td>
                        <td>exercise.reps</td>
                        <td>exercise.rest</td>
                        <td>exercise.complete</td>
                    </tr>
                )
            })}
        </Table>
    )
}

const Navigation = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <div className="daily-workout">
                    <h1>Today's Workout: Lift and BJJ</h1>
                    <h4>April 24th, 2019</h4>
                    <ul>
                        <li>Bench Press</li>
                        <li>Squat</li>
                        <li>Pullups</li>
                        <li>Stretch</li>
                    </ul>
                    <p>
                        <Button variant="primary">Complete</Button>
                    </p>
                    {goalProgess()}
                </div>

            </Container>
        </Jumbotron>
    );
}

export default Navigation;