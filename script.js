const timeZones = [
  'Europe/London',
  'UTC',
  'America/New_York',
  'Asia/Tokyo'
];

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(date);
}

function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function updateClocks() {
  const now = new Date();

  timeZones.forEach((timeZone) => {
    const timeNode = document.getElementById(`time-${timeZone}`);
    const dateNode = document.getElementById(`date-${timeZone}`);

    if (timeNode) {
      timeNode.textContent = formatTime(now, timeZone);
    }

    if (dateNode) {
      dateNode.textContent = formatDate(now, timeZone);
    }
  });
}

updateClocks();
setInterval(updateClocks, 1000);
