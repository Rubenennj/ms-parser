
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")

module.exports = (weeks) => {

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

    months = defineValue("M", "month", valuesMS.months, undefined, Math.trunc(weeks / 4))

    weeks -= months.number * 4

    container.push(months)

    if (months.number >= 12) {
        years = defineValue("y", "year", valuesMS.years, undefined, Math.trunc(months.number / 12)) 

        months.number -= years.number * 12

        container.push(years)
    }

    weeks = defineValue("w", "week", valuesMS.weeks, 4, weeks)

    container.push(weeks)

    return container
}