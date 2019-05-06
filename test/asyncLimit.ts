import test from 'ava'
import { asyncLimit } from '../src'

test('is a function', t => {
  return t.is(typeof asyncLimit, 'function')
})
