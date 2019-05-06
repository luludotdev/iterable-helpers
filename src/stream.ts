import { Readable } from 'stream'

export class IterableStream<T> extends Readable {
  private _iter: IterableIterator<T>

  constructor(iter: IterableIterator<T>, objectMode?: boolean) {
    super({ objectMode })
    this._iter = iter
  }

  public _read() {
    const { done, value } = this._iter.next()

    if (done) return this.push(null)
    else this.push(value)
  }
}
