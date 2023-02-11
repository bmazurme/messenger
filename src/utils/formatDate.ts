export const formatDate = (m: string | undefined): string => {
  const date = new Date(m!);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const resultTime = `${hours}:${(minutes <= 9)
    ? 0 + minutes.toString()
    : minutes}`;

  return m ? resultTime : '';
};
