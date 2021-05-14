// 1. Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
// Crear 5 autos en un array
// Iterar el array y mostrar los autos por pantalla
// Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
// Hacer casos de prueba  (En archivo testPunto1.js)
class Auto {
    constructor(marca, modelo, potencia, velocidad_max) {
        this._marca = marca;
        this._modelo = modelo;
        this._potencia = potencia;
        this._velocidadMaxima = velocidad_max;
    }
    detalleAuto() {
        return `\nMarca: ${this._marca}\nModelo: ${this._modelo}\nPotencia: ${this._potencia}\nVelocidad Maxima: ${this._velocidadMaxima} km/h\n`;
    }
    tiempoLlegada(km) {
        function numToHora(num) {
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
        return `\nAuto: ${this._marca + ' ' + this._modelo}\nTiempo de llegada optimo a ${this._velocidadMaxima} km/h: ${numToHora(km / this._velocidadMaxima)} horas\n`;
    }
}
const mostrarAutos = (arrAutos) => {
    let aux = 0;
    if (arrAutos instanceof Array) {
        let detalles = '';
        for (let i = 0; i < arrAutos.length; i++) {
            if (arrAutos[i] instanceof Object) {
                aux += 1;
                detalles += `${aux} Auto - ${arrAutos[i].detalleAuto()}`;
            }
            else {
                detalles += `El array debe ser de objetos Auto, en el indice ${i} del array hay un objeto de tipo "${typeof (arrAutos[i])}"\nvalor: ${arrAutos[i]}\n`;
            }
        }
        return detalles;
    }
    else {
        return `El argumento debe ser un array no un "${typeof arrAutos}"`;
    }
};
const calcularTiempo = (arrAutos, km) => {
    if (arrAutos instanceof Array && 'number' === typeof km) {
        let tiempos = '';
        for (let i = 0; i < arrAutos.length; i++) {
            if (arrAutos[i] instanceof Object) {
                tiempos += arrAutos[i].tiempoLlegada(km);
            }
            else {
                tiempos += `El array debe ser de objetos Auto, en el indice ${i} del array hay un objeto de tipo "${typeof (arrAutos[i])}"\nvalor: ${arrAutos[i]}\n`;
            }
        }
        return tiempos;
    }
    else {
        return "Argumentos Invalidos";
    }
};
const arrAutos = [
    new Auto('Ford', 'Mustang', '466 CV', 260),
    new Auto('Fiat', '147', '61 CV', 142),
    new Auto('Peugeot', '206', '177 CV', 198),
    new Auto('Chevrolet', 'Camaro', '455 CV', 250),
    new Auto('Toyota', 'Hilux', '204 CV', 170),
];
console.log(mostrarAutos(arrAutos));
console.log(calcularTiempo(arrAutos, 260));
// 2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)
class Escuela {
    constructor(nombre, cursos) {
        this._nombre = nombre;
        this._cursos = cursos;
    }
}
class Curso {
    constructor(nombre, alumnos) {
        this._nombre = nombre;
        this._alumnos = alumnos;
    }
}
class Alumno {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
}
let alumnos1 = [
    new Alumno('José Brizuela', 25),
    new Alumno('Sofia Echave', 22)
];
let alumnos2 = [
    new Alumno('Patricia Rios', 56),
    new Alumno('Cristian Ruppert', 27)
];
let cursos = [
    new Curso('Master', alumnos1),
    new Curso('Doctorado', alumnos2)
];
let escuela = new Escuela('IES 9-023', cursos);
console.log(JSON.stringify(escuela));
// 3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
// Si le asignamos más de 500000 disparamos una alarma
// Si intentamos sacar más de lo que disponemos disparamos otra alarma
// Si intentamos sacar más de 100000 disparamos otra alarma
class CuentaBancaria {
    constructor(numCuenta, fondo) {
        this._numCuenta = numCuenta;
        this._fondo = fondo;
    }
    consultarFondo() {
        return `Su cuenta tiene fondos: $${this._fondo}`;
    }
    asignar(monto) {
        if (monto > 500000) {
            return 'ALARMA - LLAMANDO AL FBI';
        }
        this._fondo += monto;
        return `Asignando $${monto},Fondos Totales: $${this._fondo}`;
    }
    extraer(monto) {
        if (monto > this._fondo || monto > 100000) {
            return 'ALARMA - LLAMANDO AL FBI';
        }
        this._fondo -= monto;
        return `Extrayendo $${monto}, Fondos Totales: $${this._fondo}`;
    }
}
let cuentaBancaria = new CuentaBancaria('2847', 25000);
console.log(cuentaBancaria.consultarFondo());
console.log(cuentaBancaria.asignar(500000));
console.log(cuentaBancaria.extraer(500));
