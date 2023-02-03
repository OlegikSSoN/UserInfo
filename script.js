const card = prompt("Введіть номер картки");
const name = prompt("Ваше ім'я");
const country = prompt("Країна проживання USA, EN, UK");
const age = Number(prompt("Ваш вік"));

if ((country == "USA", "EN" && age >= 18)) {
  alert(
    `Good afternoon ${name}, your year of birth is: ${
      2023 - age
    }. Funds will be to your card: ${card}. By place of residence: ${country}`
  );
}

if (country == "UK" && age >= 18) {
  alert(
    `Доброго дня ${name}, Ваш рік народження: ${
      2023 - age
    }. Вам буде надіслано кошти на картку: ${card}. По місцю проживання: ${country}`
  );
} else {
  alert("Ви занадто молоді! / You are too young!");
}
