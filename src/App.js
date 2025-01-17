import React, { useState } from 'react'
import { Header, TextArea, ChartPlot, Footer } from './components'
import { preparDataChart } from '../src/util/TreadUserInput'
import { ErrorContainer } from './styles'

export default function App() {

    const [value, setValue] = useState('')
    const [chartProperties, setChartProperties] = useState({
        categories: null,
        series: null,
    })
    const [showError, setShowError] = useState(false)
    const [showChart, setShowChart] = useState(false)

    const handleClick = () => {

        setChartProperties({
            categories: null,
            series: null,
        })

        setShowChart(false)
        setShowError(false)

        const temp = value !== null ? preparDataChart(value) : false

        if (temp !== false && temp?.series && temp?.series?.length > 0) {
            setChartProperties({
                categories: temp.categories,
                series: temp.series,
            })
            setShowChart(true)
        } else {
            setShowError(true)
        }

        setValue('')
    }

    const { categories, series } = chartProperties

    return (
        <div>
            <Header />
            <TextArea
                value={value}
                handleChange={(event) => setValue(event.target.value)}
                placeholder="asdasd"
            />
            {showChart && (
                <ChartPlot
                    categories={categories}
                    series={series}
                />
            )}

            {showError && (
                <ErrorContainer>Opps... Dados de entrada inválidos</ErrorContainer>
            )}

            <Footer handleClick={handleClick} disabled={value.length === 0} />
        </div>
    )
}