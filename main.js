/* Ejercitación:
En cada ejercicio utilizar console.log() o alert() para visualizar el resultado en pantalla o en consola.
1.    Crear una variable llamada miNombre y guardar en ella su primer nombre.
2.    Crear una variable llamada miApellido y guardar en ella su apellido.
3.    Crear una variable llamada miEdad y guardar en ella su edad.
4.    Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
5.    Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
6.    Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
7.    Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
8.    Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
9.    Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
10.    Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados. */

/* PUNTO 1 */ 

let miNombre = "Alejandro";

/* PUNTO 2 */ 

let miApellido = "Sanchez";

/* PUNTO 3 */ 

let miEdad = 27;

/* PUNTO 4 */ 

let miMascota = "Blanca";

/* PUNTO 5 */ 

let edadMascota = 5;

/* PUNTO 6 */

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

/* PUNTO 7 */

let nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto);

/* PUNTO 8 */

let textoPresentacion = "Hola mi nombre es " + miNombre + " " + miApellido + ", tengo " + miEdad + " años, mi mascosta se llama " + miMascota + " y tiene " + edadMascota + " años";

console.log(textoPresentacion);

/* PUNTO 9 */

let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

/* PUNTO 10 */

miNombre = prompt('Ingresa tu nombre : ');
miApellido = prompt('Ingresa tu apellido : ')
miEdad = parseInt(prompt('Ingresa tu edad : '))
miMascota = prompt('Ingresa el nombre de tu mascota : ')
edadMascota = parseInt(prompt('Ingresa la edad de tu mascota : '))

/* PUNTO 6.2 */

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

/* PUNTO 7.2 */

nombreCompleto = miNombre + " " + miApellido;

console.log(nombreCompleto);

/* PUNTO 8.2 */

textoPresentacion = "Hola mi nombre es " + miNombre + " " + miApellido + ", tengo " + miEdad + " años, mi mascosta se llama " + miMascota + " y tiene " + edadMascota + " años";

console.log(textoPresentacion);

/* PUNTO 9.2 */

sumaEdades = miEdad + edadMascota;
restaEdades = miEdad - edadMascota;
productoEdades = miEdad * edadMascota;
divisionEdades = miEdad / edadMascota;

console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

let alumno = { 
    nombre: "Alejandro",
    apellido: "Sanchez",
    edad: 27,
    sexo: "masculino",
    carrera: "Ingenieria en Sistemas"
}

console.table(alumno)

console.table(alumno.nombre)
console.table(alumno.apellido)
console.table(alumno.edad)
console.table(alumno.sexo)
console.table(alumno.carrera)

let mascota = { 
    nombre: "Blanca",
    raza: "Callejera",
    edad: 5,
    sexo: "Femenino",
    color: "Blanca"
}

console.table(mascota)

console.table(mascota.edad)
console.table(mascota.raza)
console.table(mascota.sexo)
console.table(mascota.nombre)
console.table(mascota.color)

let frutas = ["manzana", "pera", "kiwi", "naranja", "banana"]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros = [1, 2, 3, 4, 5]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = ["Alberto", "Alejandro", "Blanca"]

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])

let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4]

console.log(textoAleatorio)