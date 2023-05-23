//-------------------------------------------CLASE 1 - Principios básicos de JavaScript------------------------------------------------------
// //tipos de datos primitivos ---------------
// let stringVal = "coderhouse";
// let numberVal = 5;
// let bool = true;
// let nullVall = null;
// let indefinido = undefined;

// //tipos de datos de objetos -----------------
// let arrayType = [1, 2, 3, 4, true, "coder", [1, 2, 3, 4], {}];
// const fun1 = () => {};
// class Clase {}

// console.log(Array.isArray(arrayType)); //-> para vericar si es un agreglo

// //actividad en clase ----------------------
// let nombre = "Juan";
// let edad = 35;
// let precio = 500;
// let nombreSeries = ["GOT", "Friends"];
// let nombrePeliculas = ["Pelicula1", "Pelicula2"];

// let usuario1 = {
//   nombre: "Juan",
//   edad: 35,
//   precio: 500,
//   nombreSeries: ["GOT", "Friends"],
//   nombrePeliculas: ["Pelicula1", "Pelicula2"],
// };
// console.log(usuario1);
// console.log(usuario1.nombre); //-> propiedad particular

// let usuarios = [
//   {
//     nombre: "Juan",
//     edad: 35,
//     precio: 500,
//     nombreSeries: ["GOT", "Friends"],
//     nombrePeliculas: ["Pelicula1", "Pelicula2"],
//   },
//   {
//     nombre: "Carolina",
//     edad: 38,
//     precio: 1000,
//     nombreSeries: ["Friends"],
//     nombrePeliculas: ["Pelicula2", "Pelicula3"],
//   },
// ];
// console.log(usuarios);

// usuarios.forEach((usuario) => {
//   usuario.edad++, usuario.nombreSeries.push("Peaky");
// });
// console.log(usuarios);

// // let o const ---------------------------------

// // Funciones -----------------------------------

// function sumar(n1, n2) {
//   return n1 + n2; //->1° forma (con return lo podes utilizar siempre que la llames)
//   // console.log(n1 + n2); //->2° forma (solo sirve para mostrar por consola)
// }
// console.log(sumar(5, 7)); //->1° forma
// // sumar(5, 7); //->2° forma

// const sumarFlecha = (n1, n2) => n1 + n2;

// // CLASES---------------------------------------

// // const producto1 = {
// //   nombre: "Iphone",
// //   precio: 200,
// //   stock: 50,
// // };

// // const producto2 = {
// //   nombre: "Ipad",
// //   precio: 200,
// //   stock: 20,
// // };

// // const producto3 = {
// //   nombre: "Computador",
// //   precio: 1200,
// //   stock: 45,
// // }; //-> para evitar hacer producto x producto se pueden realizar clases

// class Producto {
//   constructor(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }

//   //cuando se crea una funcion dentro de una clase se llama metodo:
//   devolverNombre() {
//     return this.nombre;
//   }
// }

// const producto1 = new Producto("Iphone", 500, 50);
// const producto2 = new Producto("Ipad", 200, 20);
// const producto3 = new Producto("Computador", 1200, 45);

// // console.log(producto1, producto2, producto3);
// // console.log(producto1.devolverNombre());
// // console.log(producto2.devolverNombre());
