export function between(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function betweenFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function resolveNumber(n: string | number): number {
  return Math.max(parseInt(n.toString(), 10), 0);
}
