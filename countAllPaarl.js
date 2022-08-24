module.exports = function countAllPaarl(regNo) {
    let paarlRegNo = regNo.split(',');
    let arr = [];
    var counter = 0;
    for(let i=0;i<paarlRegNo.length;i++){
      let registration = paarlRegNo[i].trim();
      if(registration.startsWith('CJ')) {
        counter++;
      }
    }
    return counter;
  }
  