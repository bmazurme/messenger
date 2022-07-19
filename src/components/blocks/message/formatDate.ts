export function formatDate(m: string): string {
  const date = new Date(m);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const resultTime = `${hours}:${(minutes <= 9) 
    ? 0 + minutes.toString() 
    : minutes}`;
  return m ? resultTime : '';
} 
