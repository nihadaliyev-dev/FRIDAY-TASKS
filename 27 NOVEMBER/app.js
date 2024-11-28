// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i ** 2);
//   } else {
//     console.log(i ** 3);
//   }
// }

// let sum = 0;
// for (let i = 1; i < 10; i++) {
//   sum += i;
// }
// console.log(sum);

// let oddRes = 1;
// let evenRes = 0;
// for (let i = 1; i < 10; i++) {
//   if (i % 2 == 0) {
//     evenRes += i;
//   } else {
//     oddRes *= i;
//   }
// }
// console.log(`Multiply of odd numbers is ${oddRes}`);

// console.log(`Sum of even numbers is ${evenRes}`);

let username = "icat";
let checking = false;
for (let i = 0; i < username.length; i++) {
  if (username[i].toLowerCase() === "n") {
    checking = true;
    break;
  }
}
if (checking == true) {
  console.log("-- Adin daxilinde N herfi tapildi --");
} else {
  console.log("xx Adin daxilində N hərfi tapılmadı! xx");
}
