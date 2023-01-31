const userCardNum = prompt("Введіть номер картки");
const userName = prompt("Ваше ім'я");
const userCountry = prompt("Країна проживання USA, EN, UK");
const userAge = Number(prompt("Ваш рік народження"));
const currentYear = Number(new Date().getFullYear());
const userBirthYear = Number(currentYear - userAge);

if ((userCountry == "USA" || userCountry == "EN") && userAge >= 18) {
  alert(
    `Good afternoon ${userName}, your year of birth is: ${userBirthYear}. Funds will be to your card: ${userCardNum}. By place of residence: ${userCountry}`
  );
} else {
  if (userCountry == "UK" && userAge >= 18) {
    alert(
      `Доброго дня ${userName}, Ваш рік народження: ${userBirthYear}. Вам буде надіслано кошти на картку: ${userCardNum}. По місцю проживання: ${userCountry}`
    );
  } else {
    if ((userCountry == "USA" || userCountry == "EN") && userAge < 18) {
      alert("Sorry, you're too young!");
    } else {
      if (userCountry == "UK" && userAge < 18) {
        alert("Вибачте, Ви занадто молоді!");
      } else {
        if (
          userCountry != "USA" ||
          userCountry != "EN" ||
          userCountry != "UK"
        ) {
          alert("Ви ввели неправильне значення країни проживання");
        }
      }
    }
  }
}
