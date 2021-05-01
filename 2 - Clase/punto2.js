// 2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se le asignan Alumnos (2)
class Escuela{
    constructor(nombre, cursos) {
        this.nombre = nombre;
        this.cursos = cursos;
    }
}

class Curso{
    constructor(nombre, alumnos) {
        this.nombre = nombre;
        this.alumnos = alumnos;
    }
}

class Alumno{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let alumnos1 = [
    new Alumno('José Brizuela', 25),
    new Alumno('Sofia Echave', 22)
]

let alumnos2 = [
    new Alumno('Patricia Rios', 56),
    new Alumno('Cristian Ruppert', 27)
]


let cursos = [
    new Curso('Master', alumnos1),
    new Curso('Doctorado', alumnos2)
]

let escuela = new Escuela('IES 9-023', cursos)

console.log(JSON.stringify(escuela))

