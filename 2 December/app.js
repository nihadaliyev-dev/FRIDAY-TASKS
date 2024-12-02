const filterByLength = (strings, minLength) => {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 4) {
      result.push(strings[i]);
    }
  }
  return result;
};

const countGoldCoins = (coins) => {
  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] == 1) {
      count++;
    }
  }
  return count;
};

const inspectBaskets = (baskets, maxCapacity) => {
  let spaceleftBasket = "",
    fullBasket = "",
    overfilledBasket = "";
  for (let i = 0; i < baskets.length; i++) {
    if (baskets[i] < maxCapacity) {
      spaceleftBasket += `Basket ${i + 1}: ${
        maxCapacity - baskets[i]
      } space(s) `;
    } else if (baskets[i] == maxCapacity) {
      fullBasket += `Basket ${i + 1} `;
    } else {
      overfilledBasket += `Basket ${i + 1}: ${baskets[i] - maxCapacity} extra `;
    }
  }
  return spaceleftBasket + "\n" + fullBasket + "\n" + overfilledBasket;
};

const sumOfEven = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
};

// Easier solution (string):
// const sumOfDigits = (number) => {
//   let sum = 0;
//   let numberTxt = number.toString();
//   for (let i = 0; i < numberTxt.length; i++) {
//     sum += +numberTxt[i];
//   }
//   return sum;
// };

// Mathematical solution:
const sumOfDigits = (number) => {
  let sum = 0;
  while (number > 0) {
    sum += (number * 10) % 10;
    number = number.toFixed();
    number /= 10;
  }
  return sum;
};

console.log("Task 1.");
let strArray = ["apple", "kiwi", "banana", "grape"];
console.log(filterByLength(strArray, 4));
console.log();

console.log("Task 2.");
console.log(`Count of gold coins: ` + countGoldCoins([1, 0, 1, 1, 0, 1]));
console.log();

console.log("Task 3.");
console.log(inspectBaskets([3, 5, 8, 2, 10, 5], 5));
console.log();

console.log("Task 4.");
console.log(`Sum of even numbers in array: ` + sumOfEven([2, 4, 6, 8]));
console.log();

console.log("Task 5.");
console.log(`Sum of elements in number: ` + sumOfDigits(128));
