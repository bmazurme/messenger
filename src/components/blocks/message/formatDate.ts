export function formatDate(m: string): string {
  const date = new Date(m);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${(minutes <= 9) ? 0 + minutes.toString(): minutes}`;
} 
