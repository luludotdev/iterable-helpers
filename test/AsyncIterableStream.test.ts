import test from 'ava'
import { Readable } from 'stream'
import { AsyncIterableStream } from '../src'
import { asyncOneToN } from './helpers'

test('is a function', t => {
  return t.is(typeof AsyncIterableStream, 'function')
})

test('is a readable stream', t => {
  return t.is(AsyncIterableStream.prototype instanceof Readable, true)
})

test('transforms an iterable', async t => {
  const limiter = 10

  const promise: () => Promise<string[]> = () =>
    new Promise(resolve => {
      const gen = asyncOneToN(limiter, true)
      const stream = new AsyncIterableStream(gen)
      const values: string[] = []

      stream.on('data', (value: Buffer) => values.push(value.toString()))
      stream.on('end', () => resolve(values))
    })

  const asyncTest = await promise()
  return t.is(asyncTest.length, limiter)
})
