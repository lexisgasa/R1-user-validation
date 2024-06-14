const username = "administrador";
const password = "andalucÍa3";
const confirmPassword = "Administrador99";
const age = 25;

const hasDigitInPassword = password.match(/\d/) !== null;
const hasCapitalLetterInPassword = password.match(/[A-ZÁÉÍÓÚÜÑ]/) !== null;
const isValidPassword =
  password.length >= 8 && hasDigitInPassword && hasCapitalLetterInPassword;

console.log(`El nombre de usuario es válido: ${username.length >= 5}`);
console.log(`La contraseña es válida: ${isValidPassword}`);
console.log(
  `La repetición de la contraseña es válida: ${password === confirmPassword}`
);
console.log(`Es mayor de edad: ${age >= 18}`);
