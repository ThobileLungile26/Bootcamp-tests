module.exports = function findItemsOver20(itemList) {
    let array = [];
    for (let i = 0; i < itemList.length; i++) {
        let fruitList = itemList[i];
        if (fruitList.qty > 20) {
            array.push(fruitList)
        }
    }
    return array
}
