module.exports = function mostProfitableDepartment(profitDepartment) {
    let salesData = profitDepartment;
    let salesMap = {};
    for (let i=0;i<salesData.length;i++){
      let profitInSales = salesData[i];
      salesMap[profitInSales.department] = 0;
    }
   for (let i=0;i<salesData.length;i++){
      let profitInSales = salesData[i];
      let currentDepartmentTotal = salesMap[profitInSales.department];
     currentDepartmentTotal += profitInSales.sales
     salesMap[profitInSales.department] = currentDepartmentTotal;
               
               }
    let highestSales = 0;
    let departCatagory= '';
    for (let  sales in salesMap) {
    let soldItems = salesMap[sales];
      if(soldItems > highestSales) {
      highestSales = soldItems;
      departCatagory = sales;  
      }
    }
    return departCatagory
  }
 