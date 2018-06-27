import uniqueRandomArray from 'unique-random-array'
const dutchNames = require('./dutch-names.json')

const mainExport = {
  all: dutchNames,
  random: uniqueRandomArray(dutchNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
