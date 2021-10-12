do { let numero = parseInt(prompt('ingrese su numero de documento'))
numero < 0 || numero > 99999999 ? alert('ingrese un numero entre 0 y 99999999') :
false;
let resto = numero % 23;
isNaN(numero) ? alert('debe ingresar un numero') :
resto == 0 ? document.write('T') : 
resto == 1 ? document.write('R') : 
resto == 2 ? document.write('W') : 
resto == 3 ? document.write('A') : 
resto == 4 ? document.write('G') : 
resto == 5 ? document.write('M') : 
resto == 6 ? document.write('Y') : 
resto == 7 ? document.write('F') : 
resto == 8 ? document.write('P') : 
resto == 9 ? document.write('D') : 
resto == 10 ? document.write('X') : 
resto == 11 ? document.write('B') : 
resto == 12 ? document.write('N') : 
resto == 13 ? document.write('J') : 
resto == 14 ? document.write('Z') : 
resto == 15 ? document.write('S') : 
resto == 16 ? document.write('Q') : 
resto == 17 ? document.write('V') : 
resto == 18 ? document.write('H') : 
resto == 19 ? document.write('L') : 
resto == 20 ? document.write('C') : 
resto == 21 ? document.write('K') :
resto == 22 ? document.write('E') : false
} while (confirm('ingrese otro numero de DNI'));
