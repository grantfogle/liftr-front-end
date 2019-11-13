import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Line } from 'react-chartjs-2';
import './ProgressDashboard.scss';


class ProgressDashboard extends Component {
    state = {};

    render() {
        let data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [125, 130, 140, 145, 155, 160, 165]
                }
            ]
        };
        return (
            <div className="progress-dashboard">
                <h1>Here's your progress</h1>
                <div class="progress-dashbord__graph">
                    <Line
                        data={data}
                        height={400}
                        width={400}
                        options={{ maintainAspectRatio: false }} />
                </div>
            </div >
        );
    }
}

export default ProgressDashboard;