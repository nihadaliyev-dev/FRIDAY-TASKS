const students = [
  { name: "Ali", surname: "Hüseynov", grade: 85, class: 10 },
  { name: "Zəhra", surname: "Quliyeva", grade: 92, class: 11 },
  { name: "Orxan", surname: "Məmmədov", grade: 78, class: 9 },
  { name: "Nərmin", surname: "Rzayeva", grade: 88, class: 10 },
  { name: "Murad", surname: "Əliyev", grade: 95, class: 11 },
  { name: "Leyla", surname: "İsmayılova", grade: 81, class: 9 },
  { name: "Tural", surname: "Qurbanov", grade: 76, class: 10 },
  { name: "Günel", surname: "Səlimova", grade: 88, class: 11 },
  { name: "Kamran", surname: "Həsənov", grade: 84, class: 9 },
  { name: "Rüfət", surname: "Süleymanov", grade: 90, class: 10 },
];

let gradeAvg =
  students.reduce((accumlator, current) => accumlator + current.grade, 0) /
  students.length;

console.log(gradeAvg);
