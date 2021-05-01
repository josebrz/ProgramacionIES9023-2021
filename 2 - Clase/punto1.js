// 1. Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
// Crear 5 autos en un array
// Iterar el array y mostrar los autos por pantalla
// Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
// Hacer casos de prueba  (En archivo testPunto1.js)
class Auto{
    constructor(marca, modelo, potencia, velocidad_max){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.velocidadMaxima = velocidad_max
    }

    detalleAuto(){
        return`\nMarca: ${this.marca}\nModelo: ${this.modelo}\nPotencia: ${this.potencia}\nVelocidad Maxima: ${this.velocidadMaxima} km/h\n`
    }

    tiempoLlegada(km){
        let numToHora = num =>{
            let signo = (num >= 0) ? 1 : -1;
            num = num * signo;
            const HORA = Math.floor(num);
            let parteDecimal = num - HORA;
            const MIN = 1 / 60;
            parteDecimal = MIN * Math.round(parteDecimal / MIN);
            let minuto = Math.floor(parteDecimal * 60) + '';
            if (minuto.length < 2) {
                minuto = '0' + minuto;
            }
            signo = signo === 1 ? '' : '-';
            return signo + HORA + ':' + minuto;
        }

        return `\nAuto: ${this.marca + ' ' + this.modelo}\nTiempo de llegada optimo a ${this.velocidadMaxima} km/h: ${numToHora(km/this.velocidadMaxima)} horas\n`
    }
}

const mostrarAutos = arrAutos => {
    let aux = 0
    if(arrAutos instanceof Array){
        let detalles = '';
        for(let i=0; i < arrAutos.length; i++){
            if(arrAutos[i] instanceof Object){
                aux += 1
                detalles += `${aux} Auto - ${arrAutos[i].detalleAuto()}`
            }
            else{
                detalles += `El array debe ser de objetos Auto, en el indice ${i} del array hay un objeto de tipo "${typeof(arrAutos[i])}"\nvalor: ${arrAutos[i]}\n`
            }
        }
        return detalles
    } else{
        return `El argumento debe ser un array no un "${typeof arrAutos}"`
    }
}

const calcularTiempo = (arrAutos, km) =>{
    if(arrAutos instanceof Array && 'number' === typeof km) {
        let tiempos = '';
        for (let i = 0; i < arrAutos.length; i++) {
            if(arrAutos[i] instanceof Object) {
                tiempos += arrAutos[i].tiempoLlegada(km)
            }else{
                tiempos += `El array debe ser de objetos Auto, en el indice ${i} del array hay un objeto de tipo "${typeof(arrAutos[i])}"\nvalor: ${arrAutos[i]}\n`
            }
        }
        return tiempos
    } else{
        return "Argumentos Invalidos"
        }
}

const arrAutos= [
    new Auto('Ford', 'Mustang', '466 CV', 260),
    new Auto('Fiat', '147', '61 CV', 142),
    new Auto('Peugeot', '206', '177 CV', 198),
    new Auto('Chevrolet', 'Camaro', '455 CV', 250),
    new Auto('Toyota', 'Hilux', '204 CV', 170),
]

console.log(mostrarAutos(arrAutos))
console.log(calcularTiempo(arrAutos, 260))

module.exports = {
    Auto,
    mostrarAutos,
    calcularTiempo
}




