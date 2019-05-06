export function* oneToN(n: number = 10) {
  for (let i = 1; i <= n; i++) {
    yield i
  }
}

export function* infinite() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}

export async function* asyncOneToN(n: number = 10) {
  for (let i = 1; i <= n; i++) {
    yield i
  }
}

export async function* asyncInfinite() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}
