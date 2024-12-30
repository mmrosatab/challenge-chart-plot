function createJsonString(str) {
    try {
        const lines = str.trim().split('\n')
        const parsedLines = lines.map((line) => {
            const jsonCompatibleLine = line.replace(/(\w+):/g, '"$1":')
            const validJsonLine = jsonCompatibleLine.replace(/'/g, '"')
            return JSON.parse(validJsonLine)
        })
        return parsedLines
    } catch (error) {
        console.log({ error })
        return []
    }
}

function isValidTimestamp(timestampInterval, currentTimestamp) {
    return currentTimestamp >= timestampInterval[0] && currentTimestamp <= timestampInterval[1]
}

function startIndex(array) {
    return array.findIndex(item => item.type === 'start')
}

function formatTime(timestamp) {
    return new Date(timestamp).toISOString().slice(11, 16)
}

function preparDataChart(str) {
    const array = createJsonString(str)
    const index = startIndex(array)

    if (index < 0 || array?.length === 0) {
        return false
    }

    let chartData = []
    const { select } = array[index]
    const { group } = array[index]
    const tGlobal = []
    let checkedSpan = false

    for (let i = index + 1; i < array.length; i++) {
        switch (array[i].type) {
            case 'span': {
                const { begin, end } = array[i]
                tGlobal.push(begin)
                tGlobal.push(end)

                if (checkedSpan) {
                    chartData = chartData.filter((item) => isValidTimestamp(tGlobal, item.timestamp))
                } else {
                    checkedSpan = true
                }

                break
            }
            case 'data': {

                const { timestamp } = array[i]

                if (checkedSpan && isValidTimestamp(tGlobal, timestamp)) {

                    const line = array[i]
                    let name = ''
                    const groupName = []

                    for (let i = 0; i < group.length; i++) {
                        name = name + line[group[i]] + ' '
                    }

                    for (let i = 0; i < select.length; i++) {
                        groupName[i] = name + select[i]
                        groupName[i] = groupName[i].replace(/_/g, ' ')
                        chartData.push(
                            {
                                timestamp,
                                name: groupName[i],
                                value: line[select[i]]
                            }
                        )
                    }
                }

                break
            }
            case 'stop': {
                if (chartData.length === 0) {
                    return false
                }

                const names = [...new Set(chartData.map(item => item.name))]

                const list = names.map(name => ({
                    name,
                    data: chartData.reduce((acc, e) => {
                        if (e.name === name) acc.push(e.value)
                        return acc
                    }, [])
                }))

                const t1 = formatTime(tGlobal[0])
                const t2 = formatTime(tGlobal[1])

                if (list.length === 0) {
                    return false
                }

                return {
                    categories: [t1, t2],
                    series: list,
                }
            }
            default:
                return false
        }
    }
}

export { preparDataChart }