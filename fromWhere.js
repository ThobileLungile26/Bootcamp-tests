export default function fromWhere(regNo) {
  switch (regNo) {
    case 'CY':
      return 'Bellville';
    case 'CJ':
      return 'Paarl';
    case 'CA':
      return 'Cape Town';
    case 'CC':
      return 'Some other place!'
  }
}
console.log(fromWhere('CY'));
console.log(fromWhere('CJ'));
console.log(fromWhere('CA'));
console.log(fromWhere('CC'));