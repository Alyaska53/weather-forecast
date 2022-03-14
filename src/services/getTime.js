export function getTime(now) {
  const optionsForTime = {
    hour: 'numeric',
    minute: 'numeric',
  }

  const date = new Date(now);

  return date.toLocaleString('ru', optionsForTime);
}