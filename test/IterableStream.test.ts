import test from 'ava'
import { Readable } from 'node:stream'
import { IterableStream } from '../src/index.js'
import { oneToN } from './helpers.js'

test('is a function', t => {
  t.is(typeof IterableStream, 'function')
})

test('is a readable stream', t => {
  t.is(IterableStream.prototype instanceof Readable, true)
})

test('transforms an iterable', async t => {
  const limiter = 10

  const promise: () => Promise<string[]> = async () =>
    new Promise(resolve => {
      const gen = oneToN(limiter, true)
      const stream = new IterableStream(gen)
      const values: string[] = []

      stream.on('data', (value: Buffer) => values.push(value.toString()))
      stream.on('end', () => resolve(values))
    })

  const asyncTest = await promise()
  t.is(asyncTest.length, limiter)
})
