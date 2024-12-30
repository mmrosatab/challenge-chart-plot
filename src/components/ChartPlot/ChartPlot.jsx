import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { Container, Donut } from './styles'

const initialState = {
    options: {
        chart: {
            id: ''
        },
        xaxis: {
            categories: []
        }
    },
    series: []
}

export function ChartPlot({ categories, series }) {

    const [chartProperties, setChartProperties] = useState(initialState)

    useEffect(() => {
        setChartProperties((prevState) => ({
            ...prevState,
            options: {
                ...prevState.options,
                xaxis: {
                    ...prevState.options.xaxis,
                    categories: categories || []
                }
            },
            series: series || []
        }))
    }, [categories, series])

    return (
        <Container>
            <Donut>
                <Chart
                    options={chartProperties.options}
                    series={chartProperties.series}
                    type="line"
                    width="80%"
                    height="280px"
                />
            </Donut>
        </Container>
    )
}