export default function totalPhoneBill(callsAndSmsMade) {
  let bill = callsAndSmsMade.split(', ');
  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    if (bill[i].startsWith('call')) {
      total += 2.75;
    } else if (bill[i].startsWith('sms')) {
      total += 0.65;
    }
  }
  return 'R' + total.toFixed(2);
}
console.log(totalPhoneBill('call, sms, call, sms, sms'));
console.log(totalPhoneBill('call, sms'));
console.log(totalPhoneBill('sms, sms'));
