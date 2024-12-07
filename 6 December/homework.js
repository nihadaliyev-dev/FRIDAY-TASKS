let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];
const linebreak =
  "------------------------------------------------------------------------------------";

// - Bütün elementləri konsola yazın
students.forEach((student) => {
  console.log(student);
});

console.log(linebreak);
// - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
students.forEach((student) => {
  console.log(`ad: ${student.name}`);
});

console.log(linebreak);
// - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
students.forEach((student) => {
  console.log(`ad: ${student.name},\n soyad: ${student.surname}`);
});

console.log(linebreak);
// - Kəsri olan tələbələrin ad və soyadını çapa verin
students.forEach((student) => {
  if (student.fail) {
    console.log(`The ${student.name} is failed exam.`);
  }
});

console.log(linebreak);
// - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
let maxHobbies = 0,
  maxHobbiesHobbies,
  maxHobbiesName;
students.forEach((student) => {
  if (student.hobbies.length > maxHobbies) {
    maxHobbies = student.hobbies.length;
    maxHobbiesHobbies = student.hobbies;
    maxHobbiesName = student.name;
  }
});
console.log(
  `${maxHobbiesName} has ${maxHobbies} hobbies: ${maxHobbiesHobbies}`
);

console.log(linebreak);
// - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin
let maxAvg = 0,
  maxAvgName,
  maxAvgSurname;
students.forEach((student) => {
  if (student.avg > maxAvg) {
    maxAvg = student.avg;
    maxAvgName = student.name;
    maxAvgSurname = student.surname;
  }
});
console.log(`${maxAvgName} ${maxAvgSurname} has ${maxAvg} average points.`);

console.log(linebreak);
// - Parolu ən uzun olan tələbənin username və adını çapa verin
let maxPassLength = 0,
  maxPassLengthUsername,
  maxPassLengthName;
students.forEach((student) => {
  if (student.loginDetail.password.length > maxPassLength) {
    maxPassLength = student.loginDetail.password.length;
    maxPassLengthUsername = student.loginDetail.username;
    maxPassLengthName = student.name;
  }
});
console.log(
  `${maxPassLengthName}(${maxPassLengthUsername}) has longest password!`
);

console.log(linebreak);
// - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
students.forEach((student) => {
  if (student.boyfriendGirlfriend) {
    console.log(`${student.name} ${student.loginDetail.username}`);
  }
});

console.log(linebreak);
// - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
students.forEach((student) => {
  if (student.age == 20) {
    let teachers = "";
    student.teacher.forEach((teacher) => {
      teachers += teacher.name + " ";
    });
    console.log(
      `${student.name} is 20 years old and his(her) teachers are: ${teachers}`
    );
  }
});

console.log(linebreak);
// - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
students.forEach((student) => {
  student.salaryUSD = student.salaryAZN / 1.7;
  console.log(
    `${student.name} salary with USD is: $${student.salaryUSD.toFixed()}`
  );
});

console.log(linebreak);
// - Müəllimlərin baş hərflərini böyük hərflə yazın
students.forEach((student) => {
  student.teacher.forEach((teacher) => {
    let firstLetter = teacher.name[0].toUpperCase();
    let remainingLetters = teacher.name.slice(1);
    teacher.name = firstLetter + remainingLetters;
  });
  console.log(`${student.name} teachers are:`);
  console.log(student.teacher);
});

console.log(linebreak);
// - Şifrəsində rəqəm olmayan tələbələri tapın
students.forEach((student) => {
  let includesNumber = false;
  let pass = student.loginDetail.password;
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] == pass[i] * 1) {
      includesNumber = true;
    }
  }
  if (!includesNumber) {
    console.log(student.name, "doesn't have any numbers in his(her) password!");
  }
});

console.log(linebreak);
// - Qızların arasında id-si 3 olan müəllimlərin adını deyin
students.forEach((student) => {
  if (student.gender == "girl" && student.teacher.length > 2) {
    console.log(`${student.name}'s 3rd teacher is: ${student.teacher[2].name}`);
  } else if (student.gender == "girl") {
    console.log(`${student.name} doesn't have any ID 3 teachers`);
  }
});

console.log(linebreak);
// - Tələbələrin adlarını və müəllim saylarını çapa verin
students.forEach((student) => {
  console.log(`${student.name} has ${student.teacher.length} teachers!`);
});

console.log(linebreak);
// - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
let usernameAndPass = [];
students.forEach((student) => {
  let studentDetails = {};
  studentDetails.name = student.name;
  studentDetails.username = student.loginDetail.username;
  studentDetails.password = student.loginDetail.password;
  usernameAndPass.push(studentDetails);
});
console.log(usernameAndPass);

console.log(linebreak);
// - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin
// students.forEach((student) => {
//   for (let i = 0; i < student.teacher.length; i++) {
//     student.teacher[i].name = student.teacher[i].name.concat(" müəllim");
//   }
//   console.log(student.teacher);
// });

console.log(linebreak);
// - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
// students.forEach((student) => {
//   let newPass = "   ";
//   student.loginDetail.password = newPass.concat(student.loginDetail.password);
//   console.log(student.loginDetail);
// });

console.log(linebreak);
// - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin
students.forEach((student) => {
  for (let i = 0; i < 4; i++) {
    student.loginDetail.password = student.loginDetail.password.replace(
      student.loginDetail.password[i],
      "*"
    );
  }
  console.log(student.loginDetail.password);
});

console.log(linebreak);
// - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
// students.forEach((student) => {
//   student.surname = student.surname.slice(0, student.name.length);
//   console.log(student.surname, student.name);
// });

console.log(linebreak);
// - Bütün tələbələrin yaşlarının toplamı nə qədərdir
let sumOfAges = 0;
students.forEach((student) => {
  sumOfAges += student.age;
});

console.log(linebreak);
// - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
let sumAvg = 0;
students.forEach((student) => {
  sumAvg += student.avgPoint;
});
sumAvg /= students.length;
console.log(sumAvg.toFixed(1));

console.log(linebreak);
// - "book" həvəsini olan tələbələrin siyahısını çap edin
let hasBookHobby = [];
students.forEach((student) => {
  if (student.hobbies.includes("book")) {
    hasBookHobby.push(student.name);
  }
});
console.log(hasBookHobby);

console.log(linebreak);
// - Tələbələrin yaş ortalaması nədir?
let avgAges = 0;
students.forEach((student) => {
  avgAges += student.age;
});
avgAges /= students.length;
console.log(`Average age of students is: ${avgAges.toFixed()}`);

console.log(linebreak);
// - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin
let studentsAgeAndGender = [];
students.forEach((student) => {
  studentsAgeAndGender.push({ gender: student.gender, age: student.age });
});
console.log(studentsAgeAndGender);

console.log(linebreak);
// - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
let sumNameSurname = 0;
students.forEach((student) => {
  sumNameSurname += student.name.length + student.surname.length;
});
console.log(sumNameSurname);

console.log(linebreak);
// - Tələbələrin adlarını tərsinə çevirin.
// students.forEach((student) => {
//   let newName = "";
//   for (let i = student.name.length - 1; i >= 0; i--) {
//     newName += student.name[i];
//   }
//   student.name = newName;
//   console.log(student);
// });

console.log(linebreak);
// - "gaming" həvəsi olan tələbələrin array-ini yaradın
let gamers = [];
students.forEach((student) => {
  if (student.hobbies.includes("gaming")) gamers.push(student.name);
});
console.log(gamers);

console.log(linebreak);
// - Bütün tələbələrin hobbiləri olan array yaradın?
let allHobbies = [];
students.forEach((student) => {
  allHobbies.push(student.hobbies);
});
console.log(allHobbies);

// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// (Array method-lardan istifadə edin)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]

// 2. Write a simple JavaScript function to join all elements of the following array into a string.
// console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

// 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN

// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

// 5. Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// 6. Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.

// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// 10.
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
// ];

// #studentlərin ortalama score'nu yeni bir arrayda yığın

// 11.

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];

// # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// 12.
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];

// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

// 13.

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// 14.

// # Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function findNumberOfDivisors(n) {
//   ...
// }

// 15.

// daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// function findSpaceCounts(str){
//         ...
//     }
