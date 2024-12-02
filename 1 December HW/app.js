const compareAges = (age1, age2) => {
  if (age1 > age2) {
    return "Person 1 is older";
  } else if (age1 < age2) {
    return "Person 2 is older";
  } else {
    return "They are the same age";
  }
};

const danceBattle = (scores) => {
  let temp, swapped;
  for (let i = 0; i < scores.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < scores.length - i - 1; j++) {
      if (scores[j] > scores[j + 1]) {
        temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return (scores[0] + scores[1] + scores[2]) / 3;
};

const mirrorWords = (sentence) => {
  let reversed = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    reversed += sentence[i];
  }
  return reversed;
};

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const doubleValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};

const checkAge = (person) => {
  if (person["age"] >= 18) {
    return `${person["name"]} is above 18 years old!`;
  } else {
    return `${person["name"]} is below 18 years old.`;
  }
};

const countPositives = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
};

const checkGrade = (student) => {
  if (student["grade"] >= 50) {
    return `Student ${student["name"]} has passed exam.`;
  } else {
    return `Student ${student["name"]} has failed exam.`;
  }
};

const checkSalary = (employee) => {
  if (employee["salary"] >= 5000) {
    return `${employee["name"]}'s salary is more than 5000`;
  } else {
    return `${employee["name"]}'s salary is not more than 5000`;
  }
};

const isStock = (product) => {
  if (product["stock"] > 0 && product["price"] <= 100)
    return `This product left ${product["stock"]} stocks and price is $${product["price"]}`;
  else return `This product doesn't left any stock at price $${price["price"]}`;
};

const checkisFuel = (car) => {
  if (car["fuel"] < 10 && car["etype"] == "fuel")
    return `This car's engine type is fuel and fuel is below 10 liters.`;
  else return `This car's engine is not fuel and not below 10 liters!`;
};

let person = {
  name: "Nihad",
  age: 18,
};
let student = {
  name: "Donald",
  grade: 68,
};
let employee = {
  name: "Africe",
  salary: 8000,
};
let product = {
  stock: 99,
  price: 99,
};
let car = {
  fuel: 9,
  etype: "fuel",
};
let numberArr = [4, 512, 45, 23, 1, 59];
let strArr = ["sa", "as", "let", "var", "const"];
let str = "Yeni iliniz mübarək!";

console.log("\n");
console.log(compareAges(18, 72));
console.log("\n");
console.log(danceBattle(numberArr));
console.log("\n");
console.log(mirrorWords(str));
console.log("\n");
console.log(sumArray(numberArr));
console.log("\n");
console.log(doubleValues(numberArr));
console.log("\n");
console.log(checkAge(person));
console.log("\n");
console.log(countPositives(numberArr));
console.log("\n");
console.log(checkGrade(student));
console.log("\n");
console.log(checkSalary(employee));
console.log("\n");
console.log(isStock(product));
console.log("\n");
console.log(checkisFuel(car));
