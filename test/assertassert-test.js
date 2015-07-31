/* global describe, it */

var assertassert = require('../')

describe('assertassert', function () {
  it('provides the code testing framework', function () {
    assertassert.Code.expect({foo: 'bar'}).to.deep.equal({foo: 'bar'})
  })

  it('provides the assert testing framework', function () {
    assertassert.assert.deepEqual('foo', 'foo', 'assert library not found')
  })

  describe('chai', function () {
    it('provides chai.expect', function () {
      assertassert.chai.expect('foo').to.deep.equal('foo')
    })

    it('provides chai.should()', function () {
      assertassert.chai.should()
      'foo'.should.deep.equal('foo')
    })
  })

  it('provides the should testing framework', function () {
    assertassert.should()
    'foo'.should.equal('foo')
  })
})
