import {expect} from 'chai'
import dutchNames from '.'

describe('dutch-names', () => {
  it('should have a list of all available names', () => {
    expect(dutchNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(dutchNames.random()).to.satisfy(isIncludedIn(dutchNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
