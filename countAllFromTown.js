module.exports = function countAllFromTown(regNo, town){
    let regNoTown = regNo.split(',');
     let count = 0;
     for (let i=0;i<regNoTown.length;i++){
       let regTown = regNoTown[i].trim();
       if(regTown.startsWith(town)){
         count ++
       }
     }
     return count
   }
   