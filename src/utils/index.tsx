function convertTimestampToDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}

function convertTimestampToDay(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return daysOfWeek[date.getDay()];
}

export default {
  convertTimestampToDate,
  convertTimestampToDay,
};
