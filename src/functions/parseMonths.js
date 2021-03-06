
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")

module.exports = (months) => {

    const timeValues = [
        defineValue("s", "second", valuesMS.seconds, 60),
        defineValue("m", "minute", valuesMS.minutes, 60),
        defineValue("h", "hour", valuesMS.hours, 24),
        defineValue("d", "day", valuesMS.days, 7),
        defineValue("w", "week", valuesMS.weeks, 4),
        defineValue("M", "month", valuesMS.months, 12),
        defineValue("y", "year", valuesMS.years, 100)
    ]

    const utils = timeValues

    const container = new Array()

    years = defineValue("y", "year", valuesMS.years, undefined, Math.trunc(months / 12)) 

    months -= years.number * 12

    container.push(years)

    months = defineValue("M", "month", valuesMS.months, 12, months)

    container.push(months)

    return container
}