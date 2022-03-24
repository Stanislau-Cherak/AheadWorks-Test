type DateOptions = {
  day: 'numeric' | '2-digit',
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
}

export const getDate = (): string => {
  const currentTime = new Date();
  const options: DateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric"
  }
  let [month, day, year] = currentTime.toLocaleDateString('en-US', options).split(' ');
  day = day.slice(0, -1);
  return `${day} ${month} ${year}`;
}