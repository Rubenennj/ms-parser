const defineValue = require("../functions/defineValue");
const valuesMS = require("./valuesMS");

module.exports = [
    defineValue("s", "second", valuesMS.seconds, 60),
    defineValue("m", "minute", valuesMS.minutes, 60),
    defineValue("h", "hour", valuesMS.hours, 24),
    defineValue("d", "day", valuesMS.days, 7),
    defineValue("w", "week", valuesMS.weeks, 4),
    defineValue("M", "month", valuesMS.months, 12),
    defineValue("y", "year", valuesMS.years, 100)
]