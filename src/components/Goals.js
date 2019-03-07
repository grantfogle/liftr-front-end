import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import ListGroup from 'react-bootstrap/ListGroup';
import CurrentStats from './CurrentStats';
import DailyWorkout from './DailyWorkout';
import MiniNavigation from './MiniNavigation';
import '../App.css';

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

const Goals = () => {
    return (
        <Jumbotron fluid className="jumbo">
            <Container className="workout-container">
                <div className="daily-workout">
                    <MiniNavigation />
                    <h2>Today's Workout: Lift and BJJ</h2>
                    <ListGroup variant="flush">
                        {dailyWorkout()}
                    </ListGroup>
                    <p>
                        <Button variant="primary">Complete</Button>
                    </p>
                </div>
                <CurrentStats />
            </Container>
        </Jumbotron>
    );
}

export default Goals;