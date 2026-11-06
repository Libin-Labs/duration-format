export function formatDuration(milliseconds: number): string {
  if (!Number.isFinite(milliseconds)) throw new TypeError('Duration must be finite');
  const sign = milliseconds < 0 ? '-' : '',
    total = Math.trunc(Math.abs(milliseconds));
  if (total === 0) return '0ms';
  let rest = total;
  const parts: string[] = [];
  for (const [size, label] of [
    [86400000, 'd'],
    [3600000, 'h'],
    [60000, 'm'],
    [1000, 's'],
    [1, 'ms'],
  ] as const) {
    const count = Math.floor(rest / size);
    if (count) {
      parts.push(count + label);
      rest -= count * size;
    }
  }
  return sign + parts.join(' ');
}
