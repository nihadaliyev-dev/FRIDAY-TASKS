let resultOfExam = prompt(
  "İmtahandan aldığınız balı daxil edin [0-100 arasında]"
);
let points = resultOfExam * 1;
switch (true) {
  case points <= 100 && points >= 90:
    alert("İmtahandan aldığınız qiymət A-dır!");
    break;
  case points <= 89 && points >= 80:
    alert("İmtahandan aldığınız qiymət B-dir");
    break;
  case points <= 79 && points >= 70:
    alert("İmtahandan aldığınız qiymət C-dir");
    break;
  case points <= 69 && points >= 60:
    alert("İmtahandan aldığınız qiymət D-dir");
    break;
  case points <= 59 && points >= 50:
    alert("İmtahandan aldığınız qiymət E-dir");
    break;
  default:
    alert("İmtahandan aldığınız qiymət F-dir");
}
