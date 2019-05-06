import test from 'ava'
import { Readable } from 'stream'
import { IterableStream } from '../src'
import { oneToN } from './helpers'

test('is a function', t => {
  return t.is(typeof IterableStream, 'function')
})

test('is a readable stream', t => {
  return t.is(IterableStream.prototype instanceof Readable, true)
})

test('transforms an iterable', async t => {
  const limiter = 10

  const promise: () => Promise<string[]> = () =>
    new Promise(resolve => {
      const gen = oneToN(limiter, true)
      const stream = new IterableStream(gen)
      const values: string[] = []

      stream.on('data', (value: Buffer) => values.push(value.toString()))
      stream.on('end', () => resolve(values))
    })

  const asyncTest = await promise()
  return t.is(asyncTest.length, limiter)
})
