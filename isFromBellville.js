export default function isFromBellville(registration) {
  return registration.startsWith('CY')
}
console.log(isFromBellville('CY'))
console.log(isFromBellville('CJ'))
