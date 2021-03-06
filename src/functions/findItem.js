const errors = require("../utils/errors")
const valuesMS = require("../utils/valuesMS")
const defineValue = require("./defineValue")
const parseDays = require("./parseDays")
const parseHours = require("./parseHours")
const parseMinutes = require("./parseMinutes")
const parseMonths = require("./parseMonths")
const parseSeconds = require("./parseSeconds")
const parseWeeks = require("./parseWeeks")

module.exports = (time = String, usedLetters = [], container = []) => {

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

    let y = timeValues.length

    for (const value of timeValues) {
        
        const TIME_STRING = time.split(value.letter)[0]

        if (TIME_STRING !== "") {

            const TIME_NUMBER = Number(TIME_STRING)

            if (!isNaN(TIME_NUMBER)) {

                if (usedLetters.includes(value.letter)) throw new Error(errors.DATE_ERROR(time))

                usedLetters.push(value.letter)

                if (typeof value.maxValue !== "function" && TIME_NUMBER >= value.maxValue) {
                    if (value.text === "minute") {
                        const parse = parseMinutes(TIME_NUMBER)

                        for (const u of parse) {
                            if (u.number > 0) {
                                const f = container.find(e => e.text === u.text)
    
                                if (!f) container.push(u)
                                else {
                                    const pos = container.findIndex(e => e.text === u.text)
        
                                    if (typeof container[pos].number !== "function") {
                                        container[pos].number += u.number
                                    } else {
                                        container[pos].number = u.number
                                    }
                                }
                            }
                        }
                    } else if (value.text === "second") {
                        const parse = parseSeconds(TIME_NUMBER)

                        for (const u of parse) {
                            if (u.number > 0) {
                                const f = container.find(e => e.text === u.text)
    
                                if (!f) container.push(u)
                                else {
                                    const pos = container.findIndex(e => e.text === u.text)
        
                                    if (typeof container[pos].number !== "function") {
                                        container[pos].number += u.number
                                    } else {
                                        container[pos].number = u.number
                                    }
                                }
                            }
                        }
                    } else if (value.text === "hour") {
                        const parse = parseHours(TIME_NUMBER)

                        for (const u of parse) {
                            if (u.number > 0) {
                                const f = container.find(e => e.text === u.text)
    
                                if (!f) container.push(u)
                                else {
                                    const pos = container.findIndex(e => e.text === u.text)
        
                                    if (typeof container[pos].number !== "function") {
                                        container[pos].number += u.number
                                    } else {
                                        container[pos].number = u.number
                                    }
                                }
                            }
                        }
                    } else if (value.text === "day") {
                        const parse = parseDays(TIME_NUMBER)

                        for (const u of parse) {
                            if (u.number > 0) {
                                const f = container.find(e => e.text === u.text)
    
                                if (!f) container.push(u)
                                else {
                                    const pos = container.findIndex(e => e.text === u.text)
        
                                    if (typeof container[pos].number !== "function") {
                                        container[pos].number += u.number
                                    } else {
                                        container[pos].number = u.number
                                    }
                                }
                            }
                        }
                    } else if (value.text === "week") {
                        const parse = parseWeeks(TIME_NUMBER)

                        for (const u of parse) {
                            if (u.number > 0) {
                                const f = container.find(e => e.text === u.text)
    
                                if (!f) container.push(u)
                                else {
                                    const pos = container.findIndex(e => e.text === u.text)
        
                                    if (typeof container[pos].number !== "function") {
                                        container[pos].number += u.number
                                    } else {
                                        container[pos].number = u.number
                                    }
                                }
                            }
                        }
                    } else if (value.text === "month") {
                        const parse = parseMonths(TIME_NUMBER)

                        for (const u of parse) {
                            if (u.number > 0) {
                                const f = container.find(e => e.text === u.text)
    
                                if (!f) container.push(u)
                                else {
                                    const pos = container.findIndex(e => e.text === u.text)
        
                                    if (typeof container[pos].number !== "function") {
                                        container[pos].number += u.number
                                    } else {
                                        container[pos].number = u.number
                                    }
                                }
                            }
                        }
                    }
                } else {
                    value.number = TIME_NUMBER

                    container.push(value)
                }

                return {
                    container,
                    usedLetters,
                    value,
                    number: TIME_NUMBER
                }
            } else {
                y--

                if (y === 0) {
                    throw new Error(errors.DATE_ERROR(time))
                }
            }
        }
    }
}