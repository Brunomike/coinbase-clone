import React from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const Wrapper = styled.div`

`
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#3773F5',
        borderColor: '#3773F5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3773F5',
        pointBackgroundColor: '#3773F5',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3773F5',
        pointHoverBorderColor: '#3773F5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    }],
}

const options = {
    plugins: {
        legend: {
            display:false
        },
    },
}

const BalanceChart = () => {
    return (
        <Wrapper>
            <Line data={data} options={options} width={400} height={300 } />
        </Wrapper>
    )
}

export default BalanceChart
