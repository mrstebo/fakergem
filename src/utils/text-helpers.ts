export function capitalize(text: string): string {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

export function leftPad(text: string, length: number, paddingCharacter: string) {
  let padding = Array(length).map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}