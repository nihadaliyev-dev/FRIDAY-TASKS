const lineBreak =
  "------------------------------------------------------------------------------------------------------------------------------------------------------------------------";
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
/*
console.log(lineBreak);

// - Bütün elementləri konsola yazın
console.log(students);

console.log(lineBreak);

// - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
for (let i = 0; i < students.length; i++) {
  console.log(`ad: ${students[i].name}`);
}

console.log(lineBreak);

// - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
for (let i = 0; i < students.length; i++) {
  console.log(`ad: ${students[i].name}, soyad: ${students[i].surname}`);
}

console.log(lineBreak);

// - Kəsri olan tələbələrin ad və soyadını çapa verin
for (let i = 0; i < students.length; i++) {
  if (students[i].fail) {
    console.log(`${students[i].name} ${students[i].surname} failed. `);
  }
}

console.log(lineBreak);

// - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin
let maxHobbies = students[0].hobbies.length;
let maxHobbiesStudent;
for (let i = 0; i < students.length; i++) {
  if (students[i].hobbies.length > maxHobbies) {
    maxHobbies = students[i].hobbies.length;
    maxHobbiesStudent = students[i].name;
  }
}
console.log(`${maxHobbiesStudent} has ${maxHobbies} hobbies!`);
console.log(lineBreak);

// - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin
let maxAvg = students[0].avgPoint;
let maxAvgStudentName, maxAvgStudentSurname;
for (let i = 0; i < students.length; i++) {
  if (students[i].avgPoint > maxAvg) {
    maxAvg = students[i].avgPoint;
    maxAvgStudentName = students[i].name;
    maxAvgStudentSurname = students[i].surname;
  }
}

console.log(`${maxAvgStudentName} ${maxAvgStudentSurname}`);
console.log(lineBreak);

// - Parolu ən uzun olan tələbənin username və adını çapa verin
let maxPasswordLength = students[0].loginDetail.password.length;
let maxPassUsername, maxPassName;
for (let i = 0; i < students.length; i++) {
  if (students[i].loginDetail.password.length > maxPasswordLength) {
    maxPasswordLength = students[i].loginDetail.password.length;
    maxPassUsername = students[i].loginDetail.username;
    maxPassName = students[i].name;
  }
}
console.log(`${maxPassUsername} - ${maxPassName} has maximum symbol password!`);
console.log(lineBreak);

// - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin
for (let i = 0; i < students.length; i++) {
  if (students[i].boyfriendGirlfriend) {
    if (students[i].gender == "girl")
      console.log(`${students[i].name} has boyfriend!`);
    else console.log(`${student[i].name} has girlfriend!`);
  }
}

console.log(lineBreak);

// - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin
for (let i = 0; i < students.length; i++) {
  if (students[i].age == 20) {
    console.log(
      `${students[i].name} is ${students[i].age} years old and his(her) teachers are`
    );
    for (let j = 0; j < students[i].teacher.length; j++) {
      console.log(`The ${j + 1}. teacher is: ${students[i].teacher[j].name}`);
    }
  }
}

console.log(lineBreak);

// - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin
for (let i = 0; i < students.length; i++) {
  console.log(
    `${students[i].name} has $${(
      students[i].salaryAZN / 1.7
    ).toFixed()} salary.`
  );
}

console.log(lineBreak);

// - Müəllimlərin baş hərflərini böyük hərflə yazın
for (let i = 0; i < students[0].teacher.length; i++) {
  let firstLetter = students[0].teacher[i].name.at(0).toUpperCase();
  let remainingLetters = students[0].teacher[i].name.slice(1);
  console.log(firstLetter + remainingLetters);
}

console.log(lineBreak);

// - Şifrəsində rəqəm olmayan tələbələri tapın
for (let i = 0; i < students.length; i++) {
  let hasNumber = false;
  for (let j = 0; j < students[i].loginDetail.password.length; j++) {
    if (
      students[i].loginDetail.password[j] * 1 ==
      students[i].loginDetail.password[j]
    ) {
      hasNumber = true;
    }
  }
  if (hasNumber == false) {
    console.log(`${students[i].name} does not have any number in password`);
  }
}

console.log(lineBreak);

// - Qızların arasında id-si 3 olan müəllimlərin adını deyin
for (let i = 0; i < students.length; i++) {
  if (students[i].gender == "girl") {
    if (students[i].teacher.length >= 3) {
      console.log(
        `${students[i].name}'s 3-rd teacher is: ${students[i].teacher[2].name}`
      );
    } else {
      `${students[i].name}'s don't have 3-rd teachers!`;
    }
  }
}

console.log(lineBreak);

// Tələbələrin adlarını və müəllim saylarını çapa verin
for (let i = 0; i < students.length; i++) {
  console.log(
    `${students[i].name} has ${students[i].teacher.length} teachers.`
  );
}

console.log(lineBreak);

// Tələbələrin adlarını, username və şifrələrindən ibarət yeni array yaradın [{name:qurban, username: qurban123, password: qqq123}]
let newStudents = [];
for (let i = 0; i < students.length; i++) {
  newStudents.push({
    name: students[i].name,
    username: students[i].loginDetail.username,
    password: students[i].loginDetail.password,
  });
}

console.log(newStudents);

console.log(lineBreak);

// - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].teacher.length; j++) {
    students[i].teacher[j].name =
      students[i].teacher[j].name.concat(" müəllim.");
  }
  console.log(students[i].teacher);
}

console.log(lineBreak);

// - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin

for (let i = 0; i < students.length; i++) {
  students[i].loginDetail.password = students[i].loginDetail.password.padStart(
    students[i].loginDetail.password.length + 3,
    " "
  );
  console.log(students[i].loginDetail.password);
}

console.log(lineBreak);

// - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin

for (let i = 0; i < students.length; i++) {
  let newPass = "";
  for (let j = 0; j < students[i].loginDetail.password.length; j++) {
    if (j > 3) {
      newPass += "*";
    } else newPass += students[i].loginDetail.password[j];
  }
  students[i].loginDetail.password = newPass;
  console.log(students[i].loginDetail.password);
}

console.log(lineBreak);

// - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
for (let i = 0; i < students.length; i++) {
  students[i].surname = students[i].surname.slice(0, students[i].name.length);
  console.log(students[i].name, students[i].surname);
}

console.log(lineBreak);
// - Bütün tələbələrin yaşlarının toplamı nə qədərdir
let sumOfAges = 0;
for (let i = 0; i < students.length; i++) {
  sumOfAges += students[i].age;
}
console.log(sumOfAges);

console.log(lineBreak);
// - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
let sumOfAvg = 0;
for (let i = 0; i < students.length; i++) {
  sumOfAvg += students[i].avgPoint;
}
console.log(sumOfAvg);

console.log(lineBreak);
// - "book" həvəsini olan tələbələrin siyahısını çap edin

for (let i = 0; i < students.length; i++) {
  if (students[i].hobbies.includes("book")) {
    console.log(`${students[i].name} ${students[i].surname} likes books!`);
  }
}

console.log(lineBreak);
// - Tələbələrin yaş ortalaması nədir?
let sumOfAgeAvg = 0;
for (let i = 0; i < students.length; i++) {
  sumOfAgeAvg += students[i].age;
}
sumOfAgeAvg /= students.length;
console.log(`The average of ages in class is: ${sumOfAgeAvg.toFixed(2)}`);

console.log(lineBreak);
// - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin
let genderAndAge = [];
for (let i = 0; i < students.length; i++) {
  let studentGender = students[i].gender;
  let studentAge = students[i].age;
  genderAndAge.push({ gender: studentGender, age: studentAge });
}
console.log(genderAndAge);

console.log(lineBreak);
// - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
let sumOfNameLength = 0,
  sumOfSurnameLength = 0;
for (let i = 0; i < students.length; i++) {
  sumOfNameLength += students[i].name.length;
  sumOfSurnameLength += students[i].surname.length;
}
console.log(`Sum of name length: ${sumOfNameLength}`);
console.log(`Sum of surname length: ${sumOfSurnameLength}`);

console.log(lineBreak);
// - Tələbələrin adlarını tərsinə çevirin.
for (let i = 0; i < students.length; i++) {
  let reversed = "";
  for (let j = students[i].name.length - 1; j >= 0; j--) {
    reversed += students[i].name[j];
  }
  students[i].name = reversed;
  console.log(students[i].name);
}

console.log(lineBreak);
// - "gaming" həvəsi olan tələbələrin array-ini yaradın
let gamerStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].hobbies.includes("gaming"))
    gamerStudents.push(students[i].name);
}
console.log(gamerStudents);

console.log(lineBreak);
// - Bütün tələbələrin hobbiləri olan array yaradın?
let allHobbies = [];
for (let i = 0; i < students.length; i++) {
  allHobbies.push(students[i].hobbies);
}
console.log(allHobbies);
*/

//

//

//

// 1. Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
/*
const getFirst = (array, n = 1) => {
  let arr = array.slice(0, n);
  return arr;
};
console.log(getFirst([1, 3, 5, 7]));
*/

// 2. Write a simple JavaScript function to join all elements of the following array into a string.

const join = (array, element) => {
  let string = "";
  for (let i = 0; i < array.length * 2 - 1; i++) {
    if (i % 2 == 0) {
      string += array[i / 2];
    } else {
      string += element;
    }
  }
  return string;
};

console.log(join([1, 73, 82, 32], "*"));
console.log(lineBreak);

// 3. Write a JavaScript program(function) that accepts a string as input
//  and swaps the case of each character.
// For example, if you input 'The Quick Brown Fox'
//  the output should be 'tHE qUICK bROWN fOX'
const convert = (word) => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toLowerCase()) {
      result += word[i].toUpperCase();
    } else {
      result += word[i].toLowerCase();
    }
  }
  return result;
};

console.log(convert("saLamNecesen"));
