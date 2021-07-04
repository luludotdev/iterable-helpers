import { Readable } from 'node:stream'

export class AsyncIterableStream<T> extends Readable {
  private readonly _iter: AsyncIterableIterator<T>

  constructor(iter: AsyncIterableIterator<T>, objectMode?: boolean) {
    super({ objectMode })
    this._iter = iter
  }

  public _read() {
    // eslint-disable-next-line promise/prefer-await-to-then
    void this._iter.next().then(({ value, done }) => {
      if (done) return this.push(null)
      this.push(value)
    })
  }
}
