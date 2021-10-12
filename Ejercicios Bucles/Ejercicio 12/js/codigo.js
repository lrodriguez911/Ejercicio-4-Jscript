do {
    let edad = parseInt(prompt('ingrese su edad'))
    edad >= 18 ? document.write('puede conducir') : 
    document.write('es muy joven')
} while (edad == 0);

