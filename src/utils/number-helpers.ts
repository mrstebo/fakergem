export function resolveNumber(n: string | number): number {
  return Math.max(parseInt(n.toString()), 0);
}
