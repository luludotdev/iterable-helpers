import { Readable } from 'node:stream'

export class IterableStream<T> extends Readable {
  private readonly _iter: IterableIterator<T>

  constructor(iter: IterableIterator<T>, objectMode?: boolean) {
    super({ objectMode })
    this._iter = iter
  }

  public _read() {
    const { done, value } = this._iter.next()

    if (done) return this.push(null)
    this.push(value)
  }
}
