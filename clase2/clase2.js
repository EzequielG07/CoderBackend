//-------------------------------------------CLASE 2 - Nuevas funcionalidades de los lenguajes ECMAScritpt------------------------------------------------------
// // ES7 ---------------------------------------------
// const expNum = Math.pow(4, 3);
// // console.log(expNum);

// const expNumES7 = 4 ** 3;
// // console.log(expNumES7);

// const arrayNum = [1, 2, 3, 4, 7, 8, 9, 0];
// // console.log(arrayNum.includes(5));
// // console.log(arrayNum.includes(3));

// // ES8 ---------------------------------------------

// const obj = {
//   nombre: "Juan",
//   apellido: "Herrera",
//   edad: 30,
//   esCasado: true,
// };

// // Pasar de objetos a array para trabajarlos con sus varios metodos y volver a ser objetos
// // console.log("entries", Object.entries(obj));
// // console.log("values", Object.values(obj));
// // console.log("keys", Object.keys(obj));

// const objArray = Object.entries(obj); //-> creo el array a partir del objeto

// const objArrayMod = objArray.map(([key, value]) => [
//   key,
//   `${value} modificado`,
// ]);
// // console.log(objArrayMod);

// const objMod = Object.fromEntries(objArrayMod); //-> de esta manera se vuelve a pasar de array a objeto
// // console.log(objMod);

// // ES9 --------------------------------------------
// const animales1 = ["perro", "gato", "pajaro", "raton"];
// const animales2 = ["vaca", "toro", "caballo", "cerdo"];

// const animales = animales1.concat(animales2);
// const animalesSpread = [...animales1, ...animales2]; //-> spread sirve para concatenar los elementos del array
// // console.log(animales);
// // console.log(animalesSpread);

// const obj1 = {
//   nombre: "Lautaro",
//   apellido: "Perez,",
// };

// const obj2 = {
//   edad: 45,
//   esCasado: true,
// };

// const objUsuario = { ...obj1, ...obj2 };

// const objUsuarioCopia = { ...objUsuario, curso: "BackEnd" }; //-> se utiliza spread para guardar en memoria copia de datos en otra lugar y agregar nuevos datos
// objUsuarioCopia.nombre = "Roger";
// // console.log(objUsuario);
// // console.log(objUsuarioCopia);

// const functionUno = (param1, param2, ...otrosParams) => {
//   // console.log(param1);
//   // console.log(param2);
//   // console.log(otrosParams);
// };

// functionUno(1, 2, 3, 4, 5, 6, 7, 8, 9, 0); //-> rest operator para unir datos

// const { nombre, apellido, ...otraInfo } = objUsuarioCopia;
// // console.log(otraInfo);

// // ES10 ---------------------------------------------------

// const saludo = "       hola a todos como estas?";
// // console.log(saludo);
// // console.log(saludo.trim()); //-> remueve espacios innecesarios

// const array = [1, 2, 3, 4, [5, 6, 7, 8], [9, 0, 1, 2, [3, 4, 5, 6, 7]]];
// // console.log(array.flat()); //-> para aplanar un array que contiene mas array internamente
// // console.log(array.flat(2)); // -> niveles de los que se quiere llegar del array
// // console.log(array.flat(Infinity));

// // ES11 ---------------

// //-> ?? nulish

// const numero = 0;
// console.log(numero || 10); //-> sirve para discriminar variables nulas mas excrictamente // null - undefined - 0 - " " - NaN
// console.log(numero ?? 10); //-> sirve para discriminar menos variables nulas // null - undefined

// //variables privadas que se utilizan en clases solo para uso interno: #
