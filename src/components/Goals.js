import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup';
import DailyWorkout from './DailyWorkout';
import MiniNavigation from './MiniNavigation';
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

//daily workout component
const dailyWorkout = () => {
    let workout = ["Bench Press", "Squat", "Pullups", "Full Body Stretch"]
    return (
        workout.map(exercise => <ListGroup.Item>{exercise}</ListGroup.Item>)
    )
}

const Navigation = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <div className="daily-workout">
                    <MiniNavigation />
                    <h1>Today's Workout: Lift and BJJ</h1>
                    <h4>April 24th, 2019</h4>
                    <ListGroup variant="flush">
                        {dailyWorkout()}
                    </ListGroup>
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