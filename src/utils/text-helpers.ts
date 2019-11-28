export function capitalize(text: string): string {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

export function leftPad(text: string, length: number, paddingCharacter: string) {
  const padding = Array(length)
    .fill(null)
    .map(_ => paddingCharacter)
    .join('');
  return (padding + text).slice(-length);
}
