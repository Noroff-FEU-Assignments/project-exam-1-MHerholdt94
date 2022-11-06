// WIP date format script
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

exports.formatString = (format, date) => {
  const [MM, DD, YYYY] = date
    .toLocaleString("en-UK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split(/\W+/);
  const timeMap = { MM, DD, YYYY };
  return format.replace(/(\w+)/g, (key) => timeMap[key]);
};
