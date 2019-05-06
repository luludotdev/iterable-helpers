import test from 'ava'
import { limit } from '../src'
import { infinite, oneToN } from './helpers'

test('is a function', t => {
  return t.is(typeof limit, 'function')
})

test('limits a finite series', t => {
  const limiter = 5
  const gen = limit(oneToN(), limiter)
  const values = []

  for (const v of gen) {
    values.push(v)
  }

  t.is(values.length, limiter)
})

test('limits an infinite series', t => {
  const limiter = 5
  const gen = limit(infinite(), limiter)
  const values = []

  for (const v of gen) {
    values.push(v)
  }

  t.is(values.length, limiter)
})
