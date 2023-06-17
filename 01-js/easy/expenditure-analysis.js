/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditur1qe-analysis`
*/
function calculateTotalSpentByCategory(ts) {
  var aryCatgPrice =[];
  for (let i = 0; i < ts.length; i++) 
  {
    var curCatg = ts[i].category;
    var curPrice = ts[i].price;
    var item = GetCategoryItem(aryCatgPrice,curCatg);
    var index = aryCatgPrice?aryCatgPrice.length:0;
    if(item){
      item.totalSpent+=ts[i].price;
    }
    else
    {
      aryCatgPrice[index]= {'category':curCatg, 'totalSpent':curPrice};
    }    
  }
  return aryCatgPrice;
}
function GetCategoryItem(aryCatgPrice, catg){
  for (let i = 0; i < aryCatgPrice.length; i++) {
    if(aryCatgPrice[i].category.includes(catg)){
      return aryCatgPrice[i];
    }
  }
}
module.exports = calculateTotalSpentByCategory;
