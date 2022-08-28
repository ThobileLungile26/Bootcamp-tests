export default function countAllFromTown(regNo, town){
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
console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'));