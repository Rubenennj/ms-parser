const { values } = require("../utils/timeValues")
const timeValues = require("../utils/timeValues")
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")

module.exports = (weeks) => {

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