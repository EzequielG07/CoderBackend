// HANDS ON LAB ---------------

function mostrarLista(array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {
      console.log("Lista vacia");
    } else {
      array.forEach((elem) => console.log(elem));
      console.log(`cantidad de elementos: ${array.length}`);
    }
  } else {
    console.log("No es un agreglo");
  }
}

mostrarLista(2); //-> no es un agreglo
mostrarLista([]); //-> lista vacia
mostrarLista([5, 3]); //-> muestra elementos y mensaje de cantidad
