let total = 0;
do {
    let numero = parseInt(prompt('escriba un numero'));
    isNaN(numero) ? alert('debe ingresar un numero') : 
    total += numero;
    
} while (confirm('quiere ingresar otro numero?'))
document.write(total)