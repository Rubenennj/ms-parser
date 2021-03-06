const errors = require("../utils/errors")
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")
const findItem = require("./findItem")

module.exports = (time = String) => {

    const timeValues = [
        defineValue("s", "second", valuesMS.seconds, 60),
        defineValue("m", "minute", valuesMS.minutes, 60),
        defineValue("h", "hour", valuesMS.hours, 24),
        defineValue("d", "day", valuesMS.days, 7),
        defineValue("w", "week", valuesMS.weeks, 4),
        defineValue("M", "month", valuesMS.months, 12),
        defineValue("y", "year", valuesMS.years, 100)
    ]

    if (typeof time !== "string") throw new Error(errors.STRING_ERROR)

    let text = []

    let container = []

    let usedLetters = []

    let beforeSort = []

    let ms = 0

    for (const _ of timeValues) {
        const util = findItem(time, usedLetters, container)

        if (util) {

            container = util.container
            
            usedLetters = util.usedLetters

            ms += util.value.ms * util.number
            
            time = time.replace(util.number + util.value.letter, "")
        }
    }

    for (const value of container) {
        if (value.number > 1) value.text += "s"

        beforeSort.push({
            text: `${value.number} ${value.text}`,
            ms: value.ms
        })
    }

    let a = beforeSort.length

    for (const t of beforeSort.sort((x,y) => y.ms - x.ms)) {
        a--

        if (a === 0 && beforeSort.length !== 1) {
            text.push("and " + t.text)
        } else {
            text.push(t.text)
        }
    }

    return {
        ms: ms,
        array: text,
        string: text.join(" ")
    }
}