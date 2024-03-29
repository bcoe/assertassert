# assertassert

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]

assertassert, for when you can't decide on an assertion library.

## The API

assertassert's API combines the cutting edge in JavaScript TDD, BDD, and TBD
assertion libraries allowing you to use the best features from each:

### Code


```js
assertassert.Code.expect({foo: 'bar'}).to.deep.equal({foo: 'bar'})
```

### Chai

```js
assertassert.chai.expect('foo').to.deep.equal('foo')
```

or override the default object prototype:

```js
assertassert.chai.should()
"foo".should.deep.equal("foo")
```

### Assert

```js
assertassert.assert.deepEqual('foo', 'foo', 'assert library not found')
```

### Should

```js
assertassert.should()
"foo".should.deep.equal("foo")
```

### Must

```js
assertassert.must('foo').to.be('string')
```

That's all there is to it. assertassert is guranteed to be the last
assertion library you'll ever need.

## Contributing

Have I missed your pulling in your favorite assertion framework? found a bug? please [open an issue](https://github.com/bcoe/assertassert/issues/new).

## License

ISC

[travis-url]: https://travis-ci.org/bcoe/assertassert
[travis-image]: https://img.shields.io/travis/bcoe/assertassert.svg
[coveralls-url]: https://coveralls.io/github/bcoe/assertassert
[coveralls-image]: https://img.shields.io/coveralls/bcoe/assertassert.svg
[npm-url]: https://npmjs.org/package/assertassert
[npm-image]: https://img.shields.io/npm/v/assertassert.svg
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: https://github.com/feross/standard
