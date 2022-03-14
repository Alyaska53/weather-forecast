export function getDate(now) {
  const optionsForDate = {
    weekday: 'long',
    day: 'numeric', 
    month: 'long', 
    year: 'numeric', 
  }

  const date = new Date(now);

  return date.toLocaleString('en', optionsForDate);
}