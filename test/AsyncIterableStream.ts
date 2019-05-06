import test from 'ava'
import { AsyncIterableStream } from '../src'

test('is a function', t => {
  return t.is(typeof AsyncIterableStream, 'function')
})
