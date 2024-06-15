const username = "administrador";
const password = "andalucÍa3";
const confirmPassword = "Administrador99";
const age = 25;

const isValidUsername = username.length >= 5;
const hasDigitInPassword = password.match(/\d/) !== null;
const hasCapitalLetterInPassword = password.match(/[A-ZÁÉÍÓÚÀÈÌÒÙ]/) !== null;
const isValidPassword =
  password.length >= 8 && hasDigitInPassword && hasCapitalLetterInPassword;
const isValidConfirmPassword = password === confirmPassword;
const iValidAge = age >= 18;

console.log(`El nombre de usuario es válido: ${isValidUsername}`);
console.log(`La contraseña es válida: ${isValidPassword}`);
console.log(
  `La repetición de la contraseña es válida: ${isValidConfirmPassword}`
);
console.log(`Es mayor de edad: ${iValidAge}`);
