let busNumber = prompt("Avtobusun nömrəsini daxil edin");
let time = prompt("Nə qədər müddətdir gözləyirsiniz?");
let timeToNumber = time * 1;
if (busNumber == "135") {
  if (timeToNumber < 20) {
    let timeLeft = 20 - timeToNumber;
    alert(`Gözlədiyiniz avtobus ${timeLeft} dəqiqədən sonra gələcək!`);
  } else if (time == 20) {
    alert("Gözlədiyiniz avtobus artıq çatıb!");
  } else {
    alert(`Avtobus artıq buradan keçib`);
  }
} else if (busNumber == "199") {
  if (timeToNumber < 30) {
    let timeLeft = 30 - timeToNumber;
    alert(`Gözlədiyiniz avtobus ${timeLeft} dəqiqədən sonra gələcək!`);
  } else if (time == 30) {
    alert("Gözlədiyiniz avtobus artıq çatıb!");
  } else {
    alert(`Avtobus artıq buradan keçib`);
  }
} else {
  alert(`Gözlədiyiniz avtobus buradan keçmir!`);
}
