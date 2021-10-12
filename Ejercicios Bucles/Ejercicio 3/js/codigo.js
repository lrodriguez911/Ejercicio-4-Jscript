let fraseCompleta = '';
do {
    let cadena = prompt('escriba su frase');
    fraseCompleta = fraseCompleta +'-'+ cadena ;
} while (confirm('quiere ingresar otra frase?'))
document.write(fraseCompleta)