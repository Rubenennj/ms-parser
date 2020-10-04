const { values } = require("../utils/timeValues")
const timeValues = require("../utils/timeValues")
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")

module.exports = (months) => {

    const utils = timeValues

    const container = new Array()

    years = defineValue("y", "year", valuesMS.years, undefined, Math.trunc(months / 12)) 

    months -= years.number * 12

    container.push(years)

    months = defineValue("M", "month", valuesMS.months, 12, months)

    container.push(months)

    return container
}