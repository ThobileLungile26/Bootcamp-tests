export default function countRegNumber(regCount) {
  var array = regCount.split(",")
  return array.length;
}
console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'))
console.log(countRegNumber('CA 182736'))
