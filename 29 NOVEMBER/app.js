const fact = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const find = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return `Element is: ${element}, Index of element: ${i}`;
    }
  }
};

const evenOrOdd = (num) => {
  if (num % 2 == 0) {
    return `${num} is even number`;
  } else {
    return `${num} is odd number`;
  }
};

const posOrNeg = (num) => {
  if (num > 0) {
    return `${num} is positive`;
  } else if (num < 0) {
    return `${num} is negative`;
  } else {
    return `${num} is 0`;
  }
};

const sumofN = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  return `Sum of elements is: ${sum}`;
};

const minToSec = (min) => {
  return `${min} minutes is equal to ${min * 60} seconds`;
};

const squareOfNum = (num) => {
  return num * num;
};

const numBetween = (min, max, num) => {
  if (num >= min && num <= max) {
    return `${num} is between [${min}:${max}]`;
  } else {
    return `${num} is not between [${min}:${max}]`;
  }
};

const hoursToMin = (hours) => {
  return `${hours} hours is equal to: ${hours * 60} minutes`;
};

const lastElementArr = (arr) => {
  return `Last element of the array is: ${arr[arr.length - 1]}`;
};

const max = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

const isEqual = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
};

const multiplyTwoNum = (num1, num2) => {
  return `num1 * num2 = ${num1 * num2}`;
};

const divideTwoNum = (num1, num2) => {
  return `num1 / num2 = ${num1 / num2}`;
};

const remainder = (num1, num2) => {
  return `Remainder of ${num1} / ${num2} is ${num1 % num2}`;
};

const areaOfRectangle = (a, b) => {
  return `Area of rectangle: ${a * b}`;
};

const perimeterOfRectangle = (a, b) => {
  return `Perimeter of rectangle: ${a * 2 + b * 2}`;
};

const startsWithA = (str) => {
  if (str[0].toLowerCase() == "a") {
    return true;
  } else {
    return false;
  }
};

const addThreeNumbers = (a, b, c) => {
  return `Result of ${a} + ${b} + ${c} = ${a + b + c}`;
};

const greetings = (name) => {
  return `Salam ${name}!`;
};

const isGreaterThan100 = (num) => {
  return num > 100 ? true : false;
};

const checkGrade = (points) => {
  if (points >= 91 && points <= 100) {
    return `Your grade is A`;
  } else if (points >= 81 && points <= 90) {
    return `Your grade is B`;
  } else if (points >= 71 && points <= 80) {
    return `Your grade is C`;
  } else if (points >= 61 && points <= 70) {
    return `Your grade is D`;
  } else if (points >= 51 && points <= 60) {
    return `Your grade is E`;
  } else {
    return `You failed!`;
  }
};

const sharePizza = (pieces, peoples) => {
  return pieces < peoples ? "Sizə pizza yoxdur!" : "Hər kəsə pizza düşür!";
};

const buyCoffe = (balance, price) => {
  return balance < price ? "Su üçün get!" : "Qəhvənizdən həzz alın!";
};

const isCheeseEatable = (daysOld) => {
  return daysOld > 30 ? "Xeyr!" : "Yum!";
};

const canLift = (weight) => {
  return weight > 100 ? "Kömək çağırın!" : "Qaldıra bilirsiz (Clap)";
};

const canBreak = (workHours) => {
  return workHours >= 4 ? "Fasilə verin!" : "Fasilə verə bilməzsiniz!";
};

const numFormat = (phoneNumber) => {
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, phoneNumber.length)}`;
};

console.log(fact(5));

let arr_1 = ["a", "b", "c", "d", "e"];
console.log(find(arr_1, "a"));

console.log(evenOrOdd(28));

console.log(posOrNeg(-5));

console.log(sumofN(10));

console.log(minToSec(2));

console.log(squareOfNum(5));

console.log(numBetween(1, 10, 5));

console.log(hoursToMin(2));

let arr_2 = ["salam", "alma", "heyva", "nar"];
console.log(lastElementArr(arr_2));

console.log(max(5, 10));

console.log(isEqual(5, 5));

console.log(multiplyTwoNum(5, 10));

console.log(divideTwoNum(5, 10));

console.log(remainder(5, 10));

console.log(areaOfRectangle(5, 10));

console.log(numFormat("123456789"));

console.log(perimeterOfRectangle(5, 10));

console.log(startsWithA("Nihad"));

console.log(addThreeNumbers(1, 2, 3));

console.log(greetings("Nihad"));

console.log(isGreaterThan100(101));

console.log(checkGrade(90));

console.log(sharePizza(10, 5));

console.log(buyCoffe(10, 5));

console.log(isCheeseEatable(31));

console.log(canLift(100));

console.log(canBreak(4));
