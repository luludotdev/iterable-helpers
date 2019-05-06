import test from 'ava'
import { Readable } from 'stream'
import { AsyncIterableStream } from '../src'

test('is a function', t => {
  return t.is(typeof AsyncIterableStream, 'function')
})

test('is a readable stream', t => {
  return t.is(AsyncIterableStream.prototype instanceof Readable, true)
})
