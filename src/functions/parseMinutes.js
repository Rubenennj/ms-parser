const { values } = require("../utils/timeValues")
const timeValues = require("../utils/timeValues")
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")

module.exports = (minutes) => {

    const utils = timeValues

    const container = new Array()

    let hours, days, weeks

    hours = defineValue("h", "hour", valuesMS.hours, undefined, Math.trunc(minutes / 60))

    minutes -= hours.number * 60

    container.push(hours)

    if (hours.number >= 24) {
        days = defineValue("d", "day", valuesMS.days, undefined, Math.trunc(hours.number / 24))

        hours.number -= days.number * 24

        console.log(hours.number)

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
    }

    minutes = defineValue("m", "minute", valuesMS.minutes, 60, minutes)

    container.push(minutes)

    return container
}