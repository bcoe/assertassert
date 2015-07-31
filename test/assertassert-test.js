/* global describe, it */

var assertassert = require('../')

describe('assertassert', function () {
  it('provides the code assertion library', function () {
    assertassert.Code.expect({foo: 'bar'}).to.deep.equal({foo: 'bar'})
  })

  it('provides the assert assertion library', function () {
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

  it('provides the must assertion library', function () {
    assertassert.must('foo').to.be('string')
  })

  it('provides the should assertion library', function () {
    assertassert.should()
    'foo'.should.equal('foo')
  })
})
