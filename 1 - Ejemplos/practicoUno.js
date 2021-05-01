/*A. Dado los equipos de futbol Boca, River, Racing, Independiente, Velez crear una función que reciba por parámetros el nombre de un equipo y verifique si es uno de esos equipos dados.*/

const EQUIPOS = ["Boca", "River", "Racing", "Independiente", "Velez"]

const verificarEquipo = equipo => EQUIPOS.includes(equipo)

console.log(verificarEquipo("Boca"));
console.log(verificarEquipo("SacaChispas"));


/*B. Crear una función que me convierta de m a Km*/
const convertirMetroKilometro = metros => `${metros / 1000} Kilometros`

console.log(convertirMetroKilometro(3000))


/*C. Dado el arreglo (2,5,7,8,9)
1. Crear una función que cuente la cantidad de elementos en el arreglo
2. Crear una función que sume todos los elementos de arreglo
3. Crear una función que me devuelva los elementos ordenados del arreglo*/

const ARRAY = [20,9,8,1,10];

//1 - Forma corta
// const contadorArray = array => array.length;

//Forma larga
const contadorArray = array => {
    let contador = 0
    while(true){
        if(array[contador]) {
            contador += 1
            continue
        }
        break
    }
    return contador
}



//2 - Forma Corta
// const sumarElementos = array => array.reduce((total, current) => total + current);

// /* Forma Larga
const sumarElementos = array => {
    let total = 0;
    for(let i=0; i < array.length; i++){
        total = total + array[i]
    }
    return total
}


//3 - Forma Corta
// const elementosOrdenados = array => array.sort((a,b) => a-b)

// /* Forma Larga

const elementosOrdenados = array => {
    if(array.length >= 1){
        for(let j=0; j <= array.length; j++){
            for(let i=0; i <= array.length - 2; i++){
                if(array[i] > array[i+1]){
                    array.splice(i, 2, array[i+1], array[i])
                }
            }
        }
        return array
    }
    return 'Array Vacio'

}

console.log(contadorArray(ARRAY))
console.log(sumarElementos(ARRAY))
console.log(elementosOrdenados(ARRAY))
