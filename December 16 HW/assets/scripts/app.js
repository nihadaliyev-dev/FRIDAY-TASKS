let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

const lineBreak = "=========================================================";

console.log(lineBreak);

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

let startsWithT = arr.filter((obj) => obj.name.startsWith("t"));
console.log(startsWithT);

console.log(lineBreak);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

let endsWithT = arr.filter((obj) => obj.name.endsWith("t"));
console.log(endsWithT);

console.log(lineBreak);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"lerinin cemini tapin

let sumOfKeysT = arr
  .filter((obj) => obj.name.startsWith("t") && obj.name.endsWith("t"))
  .reduce((acc, obj) => acc + obj.key, 0);

console.log(sumOfKeysT);

console.log(lineBreak);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

let replaceArr = structuredClone(arr);
replaceArr.forEach((obj) => {
  if (obj.name.endsWith("e")) {
    obj.name = "SuperDev";
  }
});
console.log(replaceArr);

console.log(lineBreak);

// 5) "name"-i en uzun olan obyekti tapin

let longestName = arr.reduce((acc, obj) => {
  if (obj.name.length > acc.name.length) {
    return obj;
  } else {
    return acc;
  }
});
console.log(longestName);

console.log(lineBreak);

// 6) "name"-i en uzun olan obyektin key'ni tapin

// let longestNameKey = longestName.key;
let longestNameKey = arr.find((obj) => obj == longestName);
console.log(longestNameKey.key);

console.log(lineBreak);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

let indexOfLongest = arr.findIndex((obj) => obj == longestName);
console.log(indexOfLongest);

console.log(lineBreak);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

let lengthIsFour = arr.filter((obj) => obj.name.length === 4);
console.log(lengthIsFour);

console.log(lineBreak);

// 9)  en boyuk "key" i olan obyektin "name"-i ni tapin

let maxKey = arr.reduce((acc, obj) => {
  if (obj.key > acc.key) {
    return obj;
  } else {
    return acc;
  }
});
console.log(maxKey.name);

console.log(lineBreak);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

let twoLetters = arr.filter(
  (obj) => obj.name.indexOf("l") != obj.name.lastIndexOf("l")
);
console.log(twoLetters);

console.log(lineBreak);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

let twoTletters = arr.filter(
  (obj) => obj.name.indexOf("t") != obj.name.lastIndexOf("t")
);
console.log(twoTletters);

console.log(lineBreak);

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

let result = arr.filter((obj) => obj.key > 10 && obj.name.startsWith("l"));
console.log(result);

console.log(lineBreak);
