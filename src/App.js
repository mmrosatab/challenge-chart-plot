import React, { useState } from 'react'
import { Header, TextArea, ChartPlot, Footer } from './components'
import { preparDataChart } from '../src/util/TreadUserInput'
import './App.css'

export default function App() {

    const [chartProperties, setChartProperties] = useState({
        value: '',
        categories: null,
        series: null,
    })

    const handleClick = () => {
        let temp = chartProperties.value !== null ? preparDataChart(chartProperties.value) : false

        if (temp !== false) {
            setChartProperties({
                categories: temp.categories,
                series: temp.series,
                value: '',
            })
        }
    }

    const handleChange = (event) => {
        setChartProperties((prevState) => ({
            ...prevState,
            value: event.target.value
        }))
    }


    return (
        <div className="app">
            <Header />
            <TextArea
                value={chartProperties.value}
                handleChange={handleChange}
            />
            {chartProperties.categories !== null && chartProperties.series !== null ? (
                <ChartPlot
                    categories={chartProperties.categories}
                    series={chartProperties.series}
                />
            ) : (
                <React.Fragment />
            )}
            <Footer handleClick={handleClick} />
        </div>
    )
}