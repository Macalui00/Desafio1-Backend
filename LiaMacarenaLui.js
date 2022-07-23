class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName = () => {
       return `Su nombre completo es: ${this.nombre} ${this.apellido}`
    }

    addMascota = (mascota) => {
        this.mascotas.push(mascota);
    }

    countMascotas = () => {
        return this.mascotas.length
    }

    addBook = (libro) => {
        this.libros.push(libro);
    }

    getBookNames = () =>{
        const nombres = [];
        this.libros.forEach(libro => nombres.push(libro.nombre));
        return nombres;
    }

}

function cargaVariableStrings(variable,cadena){
    variable = prompt(cadena);

    while(variable.length === 0){
        variable = prompt(cadena);
    }

    return variable;
}

function agregarLibro(){

    let nombre, editorial;

    nombre = cargaVariableStrings(nombre,"Por favor, ingrese el nombre del libro.");
    editorial = cargaVariableStrings(editorial,"Por favor, ingrese la editorial del libro.");

    usuario.addBook({nombre: nombre, apellido: apellido});

}

function obtenerLibros(){

    if (usuario.getBookNames()){
        alert(`Los libros ingresados son los siguientes: ${usuario.getBookNames().join(", ")}`);
    } else {
        alert("Usted todavia no ha ingresado ningun libro");
    }

}

function agregarMascota(){
        
    let nombre;

    nombre = cargaVariableStrings(nombre,"Por favor, ingrese el nombre de la mascota.");
    usuario.addMascota(nombre);

}

function obtenerCantidadMascotas(){

    alert(`El número de mascotas ingresadas por el usuario es: ${usuario.countMascotas()}`);

}

let nombre, apellido, accion;

nombre = cargaVariableStrings(nombre,"Por favor, ingrese nombre.");
apellido = cargaVariableStrings(apellido,"Por favor, ingrese apellido.");

let usuario = new Usuario(nombre, apellido);

alert(usuario.getFullName());

while(accion !== '5'){
    accion = prompt("¿Que desea hacer? (Ingrese el número)\n1 - agregar un libro \n2 - obtener libros ingresados\n3 - agregar una mascota\n4 - obtener cantidad de mascotas\n5 - finalizar");
    
    while(accion !== '1' & accion !== '2' & accion !== '3' & accion !== '4' & accion !== '5') {
        accion = prompt("¿Que desea hacer? (Ingrese el número)\n1 - agregar un libro \n2 - obtener libros ingresados\n3 - agregar una mascota\n4 - obtener cantidad de mascotas\n5 - finalizar");
    }

    if(accion == 1){

       agregarLibro();

    }

    if(accion == 2){

        obtenerLibros();        
    }

    if(accion == 3){
        
        agregarMascota();
        
    }

    if(accion == 4){

        obtenerCantidadMascotas();
        
    }
}