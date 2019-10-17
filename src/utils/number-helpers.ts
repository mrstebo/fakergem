export function resolveNumber(n: string | number): number {
  return Math.max(parseInt(n.toString()), 0);
}

export function between(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
