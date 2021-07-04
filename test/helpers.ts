export function* oneToN(n = 10, stringed?: boolean) {
  for (let i = 1; i <= n; i++) {
    yield stringed ? `${i}` : i
  }
}

export function* infinite() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}

export async function* asyncOneToN(n = 10, stringed?: boolean) {
  for (let i = 1; i <= n; i++) {
    yield stringed ? `${i}` : i
  }
}

export async function* asyncInfinite() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}
