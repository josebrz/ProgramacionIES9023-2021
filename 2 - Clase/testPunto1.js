const {Auto, mostrarAutos, calcularTiempo} = require('./punto1')

// Pruebas
const arrAutosCorrectos = [
    new Auto('Ford', 'Mustang', '466 CV', 260),
    new Auto('Fiat', '147', '61 CV', 142),
    new Auto('Peugeot', '206', '177 CV', 198),
    new Auto('Chevrolet', 'Camaro', '455 CV', 250),
    new Auto('Toyota', 'Hilux', '204 CV', 170),
]

const arrAutosIncorrectos = [
    3,
    new Auto('Fiat', '147', '61 CV', 142),
    new Auto('Peugeot', '206', '177 CV', 198),
    'hola',
    new Auto('Toyota', 'Hilux', '204 CV', 170),
]

function testMostrarAutos(arrCorrecto, arrIncorrecto){
    let result;
    let expected;
    let response;

    // Correcto
    expected = "1 Auto - \nMarca: Ford\nModelo: Mustang\nPotencia: 466 CV\nVelocidad Maxima: 260 km/h\n" +
        "2 Auto - \nMarca: Fiat\nModelo: 147\nPotencia: 61 CV\nVelocidad Maxima: 142 km/h\n" +
        "3 Auto - \nMarca: Peugeot\nModelo: 206\nPotencia: 177 CV\nVelocidad Maxima: 198 km/h\n" +
        "4 Auto - \nMarca: Chevrolet\nModelo: Camaro\nPotencia: 455 CV\nVelocidad Maxima: 250 km/h\n" +
        "5 Auto - \nMarca: Toyota\nModelo: Hilux\nPotencia: 204 CV\nVelocidad Maxima: 170 km/h\n"
    response = mostrarAutos(arrCorrecto)
    result = expected === response
    if (!result) return result

    //Incorrectos
    // 1 prueba
    expected = "El array debe ser de objetos Auto, en el indice 0 del array hay un objeto de tipo \"number\"\nvalor: 3\n" +
        "1 Auto - \nMarca: Fiat\nModelo: 147\nPotencia: 61 CV\nVelocidad Maxima: 142 km/h\n" +
        "2 Auto - \nMarca: Peugeot\nModelo: 206\nPotencia: 177 CV\nVelocidad Maxima: 198 km/h\n" +
        "El array debe ser de objetos Auto, en el indice 3 del array hay un objeto de tipo \"string\"\nvalor: hola\n" +
        "3 Auto - \nMarca: Toyota\nModelo: Hilux\nPotencia: 204 CV\nVelocidad Maxima: 170 km/h\n"
    response = mostrarAutos(arrIncorrecto)
    result = expected === response
    if (!result) return result

    // 2 prueba
    expected = 'El argumento debe ser un array no un "string"'
    response = mostrarAutos('arrAutosIncorrectos')
    result = expected === response
    if (!result) return result

    // 3 prueba
    expected = 'El argumento debe ser un array no un "number"'
    response = mostrarAutos(2)
    result = expected === response
    if (!result) return result

    return result
}

function testCalcularTiempo(arrCorrecto, arrIncorrecto, km){
    let result;
    let expected;
    let response;

    // Correcto
    expected = "\nAuto: Ford Mustang\nTiempo de llegada optimo a 260 km/h: 0:23 horas\n\nAuto: Fiat 147\nTiempo de " +
        "llegada optimo a 142 km/h: 0:42 horas\n\nAuto: Peugeot 206\nTiempo de llegada optimo a 198 km/h: 0:30 horas\n\n" +
        "Auto: Chevrolet Camaro\nTiempo de llegada optimo a 250 km/h: 0:24 horas\n\nAuto: Toyota Hilux\n" +
        "Tiempo de llegada optimo a 170 km/h: 0:35 horas\n"
    response = calcularTiempo(arrCorrecto, km)
    result = expected === response
    if (!result) return result

    //Incorrectos
    // 1 prueba
    expected = "El array debe ser de objetos Auto, en el indice 0 del array hay un objeto de tipo \"number\"\nvalor: 3\n\n" +
        "Auto: Fiat 147\nTiempo de llegada optimo a 142 km/h: 0:42 horas\n\nAuto: Peugeot 206\n" +
        "Tiempo de llegada optimo a 198 km/h: 0:30 horas\n" +
        "El array debe ser de objetos Auto, en el indice 3 del array hay un objeto de tipo \"string\"\nvalor: hola\n\n" +
        "Auto: Toyota Hilux\nTiempo de llegada optimo a 170 km/h: 0:35 horas\n"
    response = calcularTiempo(arrIncorrecto, km)
    result = expected === response
    if (!result) return result

    // 2 prueba
    expected = 'Argumentos Invalidos'
    response = calcularTiempo('arrAutosIncorrectos', km)
    result = expected === response
    if (!result) return result

    // 3 prueba
    expected = 'Argumentos Invalidos'
    response = calcularTiempo(2, 'hola')
    result = expected === response
    if (!result) return result

    // 4 prueba
    expected = 'Argumentos Invalidos'
    response = calcularTiempo(arrAutosIncorrectos, 'hola')
    result = expected === response
    if (!result) return result

    return result
}


console.log(testMostrarAutos(arrAutosCorrectos, arrAutosIncorrectos))
console.log(testCalcularTiempo(arrAutosCorrectos, arrAutosIncorrectos, 100))
