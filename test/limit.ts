import test from 'ava'
import { limit } from '../src'

test('is a function', t => {
  return t.is(typeof limit, 'function')
})
