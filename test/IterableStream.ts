import test from 'ava'
import { IterableStream } from '../src'

test('is a function', t => {
  return t.is(typeof IterableStream, 'function')
})
