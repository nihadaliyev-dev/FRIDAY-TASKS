// for döngüsünü istifadə edərək 1-dən 10-a qədər olan ədədləri konsola çap et.
for (let i = 1; i < 10; i++) {
  console.log(i);
}
console.log();

// 1-dən 50-ə qədər olan ədədlərin cəmini tap.
let sum_1 = 0;
for (let i = 1; i <= 50; i++) {
  sum_1 += i;
}
console.log(sum_1);
console.log();

// 10-dan 1-ə qədər ədədləri əks sırada çap et.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log();

// 1-dən 20-ə qədər olan cüt ədədlərin cəmini tap.
let sum_2 = 0;
for (let i = 2; i <= 20; i += 2) {
  sum_2 += i;
}
console.log(sum_2);
console.log();

// 1-dən 20-ə qədər olan tək ədədləri konsola çap et.
for (let i = 1; i < 20; i += 2) {
  console.log(i);
}
console.log();

// 1-dən 10-a qədər olan ədədlərin kvadratlarını çap et.
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
console.log();

// İstifadəçidən bir ədəd al və for döngüsü ilə həmin ədədi qədər "Salam!" yazdır.
// let numberOfNames = prompt("Ne qeder ad yazdirmaq isteyirsiniz?: ");
// numberOfNames = numberOfNames * 1;
// for (let i = 0; i < numberOfNames; i++) {
//   console.log("Salam!");
// }
// console.log();

// Bir sətrin uzunluğunu for döngüsü ilə tap və nəticəni çap et.
let exampleString = "Balina";
let stringLength = 0;
for (let i = 0; i < Infinity; i++) {
  if (exampleString[i] == undefined) {
    break;
  } else {
    stringLength++;
  }
}
console.log(stringLength);
console.log();

// 1-dən 100-ə qədər olan ədədlərin ortalamasını tap.
let avg = 0;
let sumOfAvg = 0;
for (let i = 1; i < 100; i++) {
  sumOfAvg += i;
}
avg = sumOfAvg / 99;
console.log();

// Verilən bir ədədin faktorialını for döngüsü ilə hesabla.
let fact = 1,
  factNum = 5;
for (let i = 1; i <= factNum; i++) {
  fact *= i;
}
console.log(fact);
console.log();

// Verilən bir ədədin bütün çarpanlarını tap və çap et.
let num_2 = 32;
for (let i = 1; i <= num_2; i++) {
  if (num_2 % i === 0) {
    console.log(i);
  }
}
console.log();

// 1-dən 10-a qədər olan ədədlərin kvadratlarının cəmini tap.
let sumOfSquare = 0;
for (let i = 1; i < 10; i++) {
  sumOfSquare += i * i;
}
console.log(sumOfSquare);
console.log();

// Bir başlanğıc qiyməti ilə başlayıb, for döngüsü ilə həmin qiyməti hər dəfə 2 dəfə artır.
for (let i = 5; i < 165; i *= 2) {
  console.log(i);
}
console.log();

// 10-dan 1-ə qədər əks sırada ədədləri çap et, ancaq yalnız 5-dən böyük olanları yazdır.
for (let i = 10; i >= 1; i--) {
  if (i > 5) {
    console.log(i);
  }
}
console.log();

// 1-dən 10-a qədər olan ədədləri dövr edərək, cüt və tək ədədlərin cəmini ayrı-ayrılıqda tap.
let sumofEven = 0;
let sumofOdd = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) sumofOdd += i;
  else sumofEven += i;
}
console.log(sumofOdd, sumofEven);
console.log();

// Bir mətn daxil et və for döngüsü ilə hər bir hərfini ayrı-ayrılıqda çap et.
let text = "Salam necesiniz";
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
console.log();

// 1-dən 10-a qədər olan ədədlərdən maksimum və minimum olanı tap.
// ???
console.log();

// İngilis əlifbasındakı hərfləri for döngüsü ilə çap et.
alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
for (let i = 0; i < alphabet.length; i++) {
  console.log(
    `${i}-th element of alphabet is: ${alphabet[i].toUpperCase()} ${
      alphabet[i]
    }`
  );
}
console.log();

// 1-dən 10-a qədər olan ədədləri dövr edərək, hər bir ədədin 3 misli ilə nəticəni çap et.
for (let i = 1; i < 10; i++) {
  console.log(i * 3);
}
console.log();

// 1-dən 100-ə qədər olan ədədlərdən 5-ə və 7-yə bölünənləri tap və çap et.
for (let i = 1; i < 100; i++) {
  if (i % 5 === 0 && i % 7 === 0) console.log(i);
}
console.log();
