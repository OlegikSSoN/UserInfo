const card = prompt("Введіть номер картки");
const name = prompt("Ваше ім'я");
const country = prompt("Країна проживання USA, EN, UK");
const age = Number(prompt("Ваш рік народження"));
const userdate = Number(new Date().getFullYear());
const userage = Number(userdate - age);

if ((country == "USA" || country == "EN") && age >= 18) {
  alert(
    `Good afternoon ${name}, your year of birth is: ${userage}. Funds will be to your card: ${card}. By place of residence: ${country}`
  );
}

if (country == "UK" && age >= 18) {
  alert(
    `Доброго дня ${name}, Ваш рік народження: ${userage}. Вам буде надіслано кошти на картку: ${card}. По місцю проживання: ${country}`
  );
}
