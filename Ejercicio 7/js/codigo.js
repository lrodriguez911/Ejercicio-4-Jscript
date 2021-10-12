let numero = parseInt(prompt('Ingrese un numero'));
let numero1 = parseInt(prompt('Ingrese el segundo numero'));
let numero2 = parseInt(prompt('Ingrese el tercer numero'));
if (numero > numero1 && numero > numero2) {
document.write(`el numero mayor es ${numero}`);
}
else if (numero1 > numero && numero1 > numero2) {
    document.write(`el numero mayor es ${numero1}`);
}
else{
    document.write(`el numero mayor es ${numero2}`);
}
