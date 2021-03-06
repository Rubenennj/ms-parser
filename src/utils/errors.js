module.exports = {
    STRING_ERROR: "Supplied parameters must be a string.",
    NUMBER_ERROR: (n) => `${n} is not a valid number.`,
    DATE_ERROR: (time) => `Could not parse ${time}.`,
}