const userName = "administrador";
const password = "Administrador99";
const confirmPassword = "Administrador99";
const age = 25;

const passwordHasDigit = password.match(/\d/) !== null;
const passwordHasCapitalLetter = password.match(/[A-Z]/) !== null;
const passwordIsValid =
  password.length >= 8 && passwordHasDigit && passwordHasCapitalLetter;

console.log(`El nombre de usuario es válido: ${userName.length >= 5}`);
console.log(`La contraseña es válida: ${passwordIsValid}`);
console.log(
  `La repetición de la contraseña es válida: ${password === confirmPassword}`
);
console.log(`Es mayor de edad: ${age >= 18}`);
