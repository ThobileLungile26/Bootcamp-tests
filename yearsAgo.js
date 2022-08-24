module.exports = function yearsAgo(pastYear){
    todayDate = new Date();
    todayYear = todayDate.getFullYear();
    return todayYear - pastYear
  }
  