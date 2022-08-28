export default function countAllPaarl(regNo) {
  let paarlRegNo = regNo.split(',');
  let arr = [];
  var counter = 0;
  for (let i = 0; i < paarlRegNo.length; i++) {
    let registration = paarlRegNo[i].trim();
    if (registration.startsWith('CJ')) {
      counter++;
    }
  }
  return counter;
}
console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
console.log(countAllPaarl('CJ 345 123, CK 345, CJ 123'));
