import { Readable } from 'stream'

export class AsyncIterableStream<T> extends Readable {
  private _iter: AsyncIterableIterator<T>

  constructor(iter: AsyncIterableIterator<T>, objectMode?: boolean) {
    super({ objectMode })
    this._iter = iter
  }

  public _read() {
    this._iter.next().then(({ value, done }) => {
      if (done) return this.push(null)
      else this.push(value)
    })
  }
}
