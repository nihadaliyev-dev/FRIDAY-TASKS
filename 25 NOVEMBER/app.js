let a = 5;
let b = 6;
let c = 7;
let halfP = (a + b + c) / 2;
let area = Math.sqrt(halfP * (halfP - a) * (halfP - b) * (halfP - c));
console.log(area);

console.log("\n");
console.log("3 dəyişən təyin et və onların cəmini tap.");
let num1 = 2;
let num2 = 3;
let num3 = 4;
let sum1 = num1 + num2 + num3;
console.log(sum1);

console.log("\n");
console.log("Bir dəyişənə ədəd təyin et və onun kvadratını çap et.");
let numberOne = 5;
let powerOfnumberOne = numberOne ** 2;
console.log(powerOfnumberOne);

console.log("\n");
console.log("Verilən bir sətrin uzunluğunu tap.");
let firstName = "Nihad";
console.log(firstName.length);

console.log("\n");
console.log("İki dəyişən təyin et və onların cəmini çap et.");
let firstNumber1 = 128;
let secondNumber1 = 256;
let sum = firstNumber1 + secondNumber1;
console.log(sum);

console.log("\n");
console.log(
  "Bir dəyişənə istifadəçi adı yaz, sonra console.log() ilə 'Salam, [ad]!' yazdır."
);
let firstName1 = "Muhammad Sumbul";
console.log(`Salam, ${firstName1}`);

console.log("\n");
console.log("Bir ədəd təyin et və onun cüt ya tək olduğunu tap.");
let oddOrEven = 86;
if (oddOrEven % 2 === 0) {
  console.log("Eded cutdur");
} else {
  cconsole.log("Eded tekdir");
}

console.log("\n");
console.log("İki dəyişən təyin et və onların fərqini çap et.");
let firstNumber = 5;
let secondNumber = 10;
let difference = firstNumber - secondNumber;
console.log(difference);

console.log("\n");
console.log(
  "Əgər bir dəyişən 10-dan böyükdürsə, 'Böyük' yazdır, əks halda 'Kiçik'."
);
let numberBiggerThanTen = 24;
if (numberBiggerThanTen > 10) {
  console.log("Böyük");
} else {
  console.log("Kiçik");
}

console.log("\n");
console.log("Bir massiv təyin et və onun uzunluğunu tap.");
let meyveler = ["alma", "armud", "heyva", "nar"];
console.log(meyveler);

console.log("\n");
console.log("Bir massivdə olan ilk elementi çap et.");
console.log(meyveler[0]);

console.log("\n");
console.log("1-dən 5-ə qədər olan ədədləri bir döngü ilə çap et.");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("\n");
console.log("Bir massivdən son elementi sil və çap et.");
meyveler.pop();
console.log(meyveler);

console.log("\n");
console.log("İki sətri birləşdir və çap et.");
let str1 = "Nihad ";
let str2 = "Aliyev";
let strResult = str1 + str2;
console.log(strResult);

console.log("\n");
console.log(
  "Bir massivdəki hər bir ədədin kvadratını tap və yeni massivə əlavə et."
);
let numbers = [1, 2, 3, 4, 5];
let resultNums = [];
for (let i = 0; i < numbers.length; i++) {
  let powerofNum = numbers[i] ** 2;
  resultNums.push(powerofNum);
}
console.log(resultNums);

console.log("\n");
console.log("İki ədəd arasında ən böyüyünü tap.");
let firstNumber2 = 128;
let secondNumber2 = 256;
if (firstNumber2 > secondNumber2) {
  console.log(firstNumber2);
} else if (secondNumber2 > firstNumber2) {
  console.log(secondNumber2);
} else {
  console.log("Ədədlər bərabərdir", firstNumber2);
}

console.log("\n");
console.log("Verilən sətrdə 'a' hərfinin sayını tap.");
let str3 = "Nihad Aliyev";
let count = 0;
for (let i = 0; i < str3.length; i++) {
  if (str3[i] === "a") {
    count++;
  }
}
console.log(count);

console.log("\n");
console.log("prompt ilə istifadəçidən bir ədəd al və 10-a vurub çap et.");
let number = prompt("Eded daxil edin: ");
console.log(number * 10);

console.log("\n");
console.log("Bir obyekt yaradıb, onun bir xüsusiyyətini çap et.");
let adam = {
  name: "Nihad",
  surname: "Aliyev",
  age: 18,
};
console.log(`${adam.name} ${adam.surname}-in ${adam.age} yaşı var.`);

console.log("\n");
console.log("Bir ədədin faktorialını tap.");
let factNum = 5;
let factResult = 1;
for (let i = 1; i <= factNum; i++) {
  factResult *= i;
}
console.log(factResult);

console.log("\n");
console.log("0-dan 100-ə qədər təsadüfi bir ədəd generasiya et və çap et.");
console.log(Math.random() * 101);
