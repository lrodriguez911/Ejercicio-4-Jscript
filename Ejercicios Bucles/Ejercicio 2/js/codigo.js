while (true){
let nota = parseInt(prompt('ingrese un numero de 0 al 10'))
    nota < 0 || nota > 10 ? alert('Numero erroneo') :
    nota >= 0 && nota <= 2 ? alert('Muy deficiente') : 
    nota === 3 || nota === 4 ? alert('Insuficiente') : 
    nota === 5 || nota === 6 ? alert('Suficiente') : 
    nota === 7  ? alert('Bien') : 
    nota === 8 || nota === 9 ? alert('Notable') :
    nota === 10  ? alert('Sobresaliente'):
    isNaN(!nota) ?  true : alert('Introduce un numero valido');

}
/* let nota = parseInt(prompt('ingrese un numero de 0 al 10'));
nota >= 0 && nota <= 2 ? alert('Muy deficiente') : 
nota === 3 && nota === 4 ? alert('Muy deficiente') : 
nota === 5 && nota === 6 ? alert('Muy deficiente') : 
nota === 7  ? alert('Muy deficiente') : 
nota === 8 && nota === 9 ? alert('Muy deficiente') :
nota === 10  ? alert('Muy deficiente'):any; */