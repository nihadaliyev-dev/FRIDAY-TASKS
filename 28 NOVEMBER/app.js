// let db =
//   "1267351287423497369734126378961236982178326178391263496324768324234679823467897284366789234732498632798693247867324896793246327498679324832467989263748679842679832478253649782326381726497867986129874697126487913269874167294671824027183492146393287136347283";

// let maxNum = +db[0];
// let minNum = +db[0];

// for (let i = 0; i < db.length; i++) {
//   if (+db[i] > maxNum) maxNum = +db[i];
//   if (+db[i] < minNum) minNum = +db[i];
// }
// console.log("Max num is: ", maxNum);
// console.log("Min num is: ", minNum);
// console.log(`Sum of maxNum and minNum is: ${maxNum + minNum}`);

let task = prompt("Çalışdırmaq istədiyiniz tapşırığı yazın(məs.1,2)");
if (task == 1) {
  firstTask();
} else if (task == 2) {
  secondTask();
} else if (task == 3) {
  thirdTask();
} else if (task == 4) {
  fourthTask();
} else if (task == 5) {
  fifthTask();
} else if (task == 6) {
  sixthTask();
} else if (task == 7) {
  seventhTask();
} else {
  alert(
    "Qeyd etdiyiniz tapışrıq yoxdur! Düzgün tapşırıq seçdyinizdən əmin olun!"
  );
}

// 1. İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin
function firstTask() {
  let a = prompt("Tapsiriq1. a terefini daxil edin: ");
  let b = prompt("b terefini daxil edin: ");
  let c = prompt("c terefini daxil edin: ");
  (a = +a), (b = +b), (c = +c);
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Bu ədədlər üçbucagın terefi olur");
  } else {
    console.log("Bu ədədlər üçbucagın terefi olmur");
  }
}

// 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.
function secondTask() {
  let a_2 = prompt("Tapsiriq2. a terefini daxil edin: ");
  let b_2 = prompt("b terefini daxil edin: ");
  let c_2 = prompt("c terefini daxil edin: ");
  if (a_2 == b_2 && c_2 == a_2) {
    console.log("Üçbucaq bərabərtərəflidir!");
  } else {
    console.log("Üçbucaq bərabərtərəfli deyil!");
  }
}

// 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin
function thirdTask() {
  let num_1 = prompt("Tapsiriq3. 1-ci ədədi daxil edin: ");
  let num_2 = prompt("2-ci ədədi daxil edin: ");
  num_1 = +num_1;
  num_2 = +num_2;
  if (num_1 > num_2) {
    console.log(`${num_1} ${num_2}-dən böyükdür`);
  } else if (num_1 == num_2) {
    console.log(`${num_1} ${num_2} bir birinə bərabərdir!`);
  } else {
    console.log(`${num_2} ${num_1}-dən böyükdür`);
  }
}

// 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.
function fourthTask() {
  let num2_1 = prompt("Tapsiriq4. num1-i daxil edin: "),
    num2_2 = prompt("num2-ni daxil edin: "),
    num2_3 = prompt("num3-u daxil edin: ");
  num2_1 = +num2_1;
  num2_2 = +num2_2;
  num2_3 = +num2_3;
  if (num2_1 > num2_2 && num2_1 > num2_3) {
    console.log("num2_1", num2_1);
  } else if (num2_2 > num2_1 && num2_2 > num2_3) {
    console.log("num2_2", num2_2);
  } else {
    console.log("num2_3", num2_3);
  }
}

// 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.
function fifthTask() {
  let num3_1 = prompt("Tapsiriq.5 num1-i daxil edin:"),
    num3_2 = prompt("num2-ni daxil edin: "),
    num3_3 = prompt("num3-u daxil edin: ");
  let ascending = "";
  ascending += num3_1;
  ascending += num3_2;
  ascending += num3_3;
  for (let i = 0; i < ascending.length; i += 2) {
    for (let j = 1; j < ascending.length; j++) {
      if (+ascending[i] > +ascending[j]) {
        ascending[i] = ascending[j];
      }
    }
  }
  console.log(ascending);
}

// 6. Kinoteatra bilet satan proqram yazın. Şərtlər: Bilet qiyməti 10 AZN, yaş 18+ olmalıdır, yaş 18-dirsə minimum 3 bilet almalıdır.
function sixthTask() {
  let numberOfTickets = +prompt("Tapsiriq6. Bilet sayini daxil edin:");
  let cash = +prompt("Cibinizdə olan pulu daxil edin: ");
  let age = +prompt("Yaş daxil edin: ");
  if (numberOfTickets >= 3 && age >= 18 && cash >= 30)
    console.log(
      `Siz bilet ala bilərsiniz yekun qiymət: ${numberOfTickets * 10} AZN`
    );
  else console.log(`Siz bilet ala bilməzsiniz!`);
}

// 7. Bankomat proqramı tərtib edin. 1-düyməsini seçdikdə balans ekranda göstərilsin. 2-düyməsini seçdikdə balansa mədaxil olunsun və balans ekranda göstərilsin,
// 3-düyməsini seçdikdə balansdan pul çıxarılsın. 4-düyməsini seçdikdə çıxış verilsin.
function seventhTask() {
  let check = true;
  while (check) {
    let option = prompt(
      "Əməliyyat seçin:\n1-balansı ekranda göstərmək üçün\n2-balansa mədaxil etmək və balansın göstərilməsi\n3-pulun nağdlaşdırılması(pul çıxarışı)\n4-Çıxış"
    );
    let balance = 12000;
    if (option == 1) {
      console.log(`Kartınızda ${balance} AZN mövcuddur.`);
    } else if (option == 2) {
      let balanceIn = prompt("Balansı artırmaq üçün məbləğ daxil edin:");
      console.log(`Hesabınıza ${balanceIn} AZN mədaxil edildi.`);
    } else if (option == 3) {
      let balanceOut = prompt(
        "Balansdan nə qədər məbləğ çıxarmaq istəyirsiniz?"
      );
      console.log(`Hesabınızdan ${balanceOut} AZN məbləğ çıxarıldı.`);
    } else if (option == 4) {
      check = false;
      console.log(`Əməliyyat sona çatdı! Allah bərəkət versin.`);
    }
  }
}
