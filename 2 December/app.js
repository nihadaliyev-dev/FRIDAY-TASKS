const filterByLength = (strings, minLength) => {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > 4) {
      result.push(strings[i]);
    }
  }
  return result;
};

let strArray = ["apple", "kiwi", "banana", "grape"];
console.log(filterByLength(strArray, 4));

const countGoldCoins = (coins) => {
  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] == 1) {
      count++;
    }
  }
  return count;
};

console.log(countGoldCoins([1, 0, 1, 1, 0, 1]));

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

console.log(inspectBaskets([3, 5, 8, 2, 10, 5], 5));

const sumOfEven = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
};

const sumOfDigits = (number) => {
  let sum = 0;
  let numberTxt = number.toString();
  for (let i = 0; i < numberTxt.length; i++) {
    sum += +numberTxt[i];
  }
  return sum;
};
console.log();
console.log(`Sum of even numbers in array: ` + sumOfEven([2, 4, 6]));
console.log(`Sum of elements in number: ` + sumOfDigits(128));
