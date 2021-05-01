// 3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
// Si le asignamos más de 500000 disparamos una alarma
// Si intentamos sacar más de lo que disponemos disparamos otra alarma
// Si intentamos sacar más de 100000 disparamos otra alarma

class CuentaBancaria{
    constructor(numCuenta, fondo) {
        this.numCuenta = numCuenta;
        this.fondo = fondo;
    }

    consultarFondo(){
        return `Su cuenta tiene fondos: $${this.fondo}`
    }

    asignar(monto){
        if(monto > 500000){
            return 'ALARMA - LLAMANDO AL FBI'
        }
        this.fondo += monto;
        return `Asignando $${monto},Fondos Totales: $${this.fondo}`
    }
    extraer(monto){
        if(monto > this.fondo || monto > 100000){
            return 'ALARMA - LLAMANDO AL FBI'
        }
        this.fondo  -= monto;
        return `Extrayendo $${monto}, Fondos Totales: $${this.fondo}`
    }
}

let cuentaBancaria = new CuentaBancaria('2847', 25000)

console.log(cuentaBancaria.consultarFondo())
console.log(cuentaBancaria.asignar(500000))
console.log(cuentaBancaria.extraer(500))


