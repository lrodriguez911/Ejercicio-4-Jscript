let numero = parseInt(prompt('ingrese un numero'));
document.write(numero % 2 || numero % 3 || numero % 5 || numero % 7 ? 'es divisible' : 'no es divisible')