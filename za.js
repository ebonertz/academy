let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log(`Order:${crustType} pizza topped with ${topping}`);
};

takeOrder('bacon', 'thin crust');
takeOrder('sausage', 'deep dish');
takeOrder('pepperoni', 'brooklyn style');

//Concise body arrow function (removes the parentheses around the single parameter, removed the brackets, remove the return)
const getSubTotal = itemCount => itemCount * 7.5;

const getTax = () => getSubTotal(orderCount) * 0.06;

const getTotal = () => getSubTotal(orderCount) + getTax();

console.log(getSubTotal(orderCount));
console.log(getTotal());
