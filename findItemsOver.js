export default function findItemsOver(itemList, threshold){
    let arr = [];
    for(let  i=0;i<itemList.length;i++) {
      let fruitList1 = itemList[i];
      if(fruitList1.qty > threshold) {
        arr.push(fruitList1)
      }
    }
    return arr
  }
  