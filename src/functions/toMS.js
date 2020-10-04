const errors = require("../utils/errors")
const timeValues = require("../utils/timeValues")
const findItem = require("./findItem")

module.exports = (time = String) => {

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