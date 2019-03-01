import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

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
        return <ProgressBar now={progress} label={goal.name + ' goal: ' + goal.goal} />
    })
}

const Navigation = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                {goalProgess()}
            </Container>
        </Jumbotron>
    );
}

export default Navigation;