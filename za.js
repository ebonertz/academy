let orderCount = 0;
const takeOrder = (topping, crustType) => {
  console.log(`Order:${crustType} crust pizza topped with ${topping}`);
  orderCount ++;
  }

const getSubTotal = (itemCount) => {
  return (itemCount * 7.5);
}

takeOrder('bacon', 'thin');
takeOrder('sausage', 'deepdish');
takeOrder('ham', 'pan');
console.log(getSubTotal(orderCount));
