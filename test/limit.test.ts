import test from 'ava'
import { limit } from '../src'
import { infinite, oneToN } from './helpers'

test('is a function', t => {
  return t.is(typeof limit, 'function')
})

test('limits a finite series', t => {
  const limiter = 5
  const gen = limit(oneToN(), limiter)
  const values = [...gen]

  return t.is(values.length, limiter)
})

test('limits an infinite series', t => {
  const limiter = 5
  const gen = limit(infinite(), limiter)
  const values = [...gen]

  return t.is(values.length, limiter)
})

test('does not fail when limit is higher than iterator length', t => {
  const base = oneToN(10)
  const gen = limit(oneToN(10), 200)

  const baseValues = [...base]
  const values = [...gen]
  return t.is(baseValues.length, values.length)
})
