import test from 'ava'
import { asyncLimit } from '../src/index.js'
import { asyncInfinite, asyncOneToN } from './helpers.js'

test('is a function', t => {
  t.is(typeof asyncLimit, 'function')
})

test('limits a finite series', async t => {
  const limiter = 5
  const gen = asyncLimit(asyncOneToN(), limiter)
  const values = []

  for await (const v of gen) {
    values.push(v)
  }

  t.is(values.length, limiter)
})

test('limits an infinite series', async t => {
  const limiter = 5
  const gen = asyncLimit(asyncInfinite(), limiter)
  const values = []

  for await (const v of gen) {
    values.push(v)
  }

  t.is(values.length, limiter)
})

test('does not fail when limit is higher than iterator length', async t => {
  const base = asyncOneToN(10)
  const gen = asyncLimit(asyncOneToN(10), 200)

  const baseValues = []
  const values = []

  for await (const v of base) {
    baseValues.push(v)
  }

  for await (const v of gen) {
    values.push(v)
  }

  t.is(baseValues.length, values.length)
})
