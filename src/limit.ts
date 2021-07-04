export const limit: <T>(
  iter: IterableIterator<T>,
  upper: number
) => IterableIterator<T> = function* (iter, upper) {
  for (let i = 0; i < upper; i++) {
    const next = iter.next()

    if (next.done) break
    else yield next.value
  }
}

export const asyncLimit: <T>(
  iter: AsyncIterableIterator<T>,
  upper: number
) => AsyncIterableIterator<T> = async function* (iter, upper) {
  for (let i = 0; i < upper; i++) {
    // eslint-disable-next-line no-await-in-loop
    const next = await iter.next()

    if (next.done) break
    else yield next.value
  }
}
