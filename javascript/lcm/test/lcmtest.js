const {expect} = require('chai')
const lcm = require('../lcm')

describe('should return least common multiple of two integers', function () {
  it('should return product when there are no common factors', function () {
    expect(lcm(4,5)).to.equal(20)
    expect(lcm(7,15)).to.equal(105)
  })
  it('should return the larger if one input is a multiple of the other', function() {
    expect(lcm(4,8)).to.equal(8)
    expect(lcm(3,27)).to.equal(27)
  })
  it('should return lcm when it is neither one of the integers nor the product', function() {
    expect(lcm(6,10)).to.equal(30)
    expect(lcm(4,10)).to.equal(20)
    expect(lcm(4,18)).to.equal(36)
  })
})
