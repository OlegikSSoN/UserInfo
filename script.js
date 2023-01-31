const card = prompt("Введіть номер картки");
const name = prompt("Ваше ім'я");
const country = prompt("Країна проживання USA, EN, UK");
const age = Number(prompt("Ваш рік народження"));
const currentYear = Number(new Date().getFullYear());
const userBirthYear = Number(currentYear - age);

if ((country == "USA" || country == "EN") && age >= 18) {
  alert(
    `Good afternoon ${name}, your year of birth is: ${userBirthYear}. Funds will be to your card: ${card}. By place of residence: ${country}`
  );
} else {
  if (country == "UK" && age >= 18) {
    alert(
      `Доброго дня ${name}, Ваш рік народження: ${userBirthYear}. Вам буде надіслано кошти на картку: ${card}. По місцю проживання: ${country}`
    );
  } else {
    if ((country == "USA" || country == "EN") && age < 18) {
      alert("Sorry, you're too young!");
    } else {
      if (country == "UK" && age < 18) {
        alert("Вибачте, Ви занадто молоді!");
      } else {
        if (country != "USA" || country != "EN" || country != "UK") {
          alert("Ви ввели неправильне значення країни проживання");
        }
      }
    }
  }
}
