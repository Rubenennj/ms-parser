const { values } = require("../utils/timeValues")
const timeValues = require("../utils/timeValues")
const { months } = require("../utils/valuesMS")
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")

module.exports = (hours) => {

    const utils = timeValues

    const container = new Array()

    let days, weeks

    days = defineValue("d", "day", valuesMS.days, undefined, Math.trunc(hours / 24))

    hours -= days.number * 24

    container.push(days)

    if (days.number >= 7) {
        weeks = defineValue("w", "week", valuesMS.weeks, undefined, Math.trunc(days.number / 7)) 
    
        days.number -= weeks.number * 7

        container.push(weeks)

        if (weeks.number >= 4) {
            months = defineValue("M", "month", valuesMS.months, undefined, Math.trunc(weeks.number / 4)) 
    
            weeks.number -= months.number * 4
    
            container.push(months)

            if (months.number >= 12) {
                years = defineValue("y", "year", valuesMS.years, undefined, Math.trunc(months.number / 12)) 

                months.number -= years.number * 12

                container.push(years)
            }
        }
    }

    hours = defineValue("h", "hour", valuesMS.hours, 60, hours)

    container.push(hours)

    return container
}