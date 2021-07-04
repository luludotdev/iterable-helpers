import test from 'ava'
import { limit } from '../src/index.js'
import { infinite, oneToN } from './helpers.js'

test('is a function', t => {
  t.is(typeof limit, 'function')
})

test('limits a finite series', t => {
  const limiter = 5
  const gen = limit(oneToN(), limiter)
  const values = [...gen]

  t.is(values.length, limiter)
})

test('limits an infinite series', t => {
  const limiter = 5
  const gen = limit(infinite(), limiter)
  const values = [...gen]

  t.is(values.length, limiter)
})

test('does not fail when limit is higher than iterator length', t => {
  const base = oneToN(10)
  const gen = limit(oneToN(10), 200)

  const baseValues = [...base]
  const values = [...gen]
  t.is(baseValues.length, values.length)
})
