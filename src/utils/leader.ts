
export function mapAngerToDuration(x: number): number {
  const xClamped = Math.min(10, Math.max(5, x));
  return -280 * xClamped + 2900;
}
