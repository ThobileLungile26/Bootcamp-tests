export default function yearsAgo(pastYear) {
  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  return todayYear - pastYear
}
console.log((new Date().getFullYear() - 1976));
console.log((new Date().getFullYear() - 2000));
