import test from 'ava'
import { Readable } from 'stream'
import { IterableStream } from '../src'

test('is a function', t => {
  return t.is(typeof IterableStream, 'function')
})

test('is a readable stream', t => {
  return t.is(IterableStream.prototype instanceof Readable, true)
})
