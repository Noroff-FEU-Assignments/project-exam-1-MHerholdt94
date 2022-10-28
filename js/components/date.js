const date = new Date();
const day = date.getDate();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[date.getMonth()];
const year = date.getFullYear();
export const dateFormat = day + ". " + month + " " + year;
