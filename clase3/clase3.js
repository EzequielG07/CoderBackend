//-------------------------------------------CLASE 3 - Programación sincrónica y asincrónica-----------------------------------------------------
function saludar() {
  return 'Buenos dias';
}

const segundaFunOneline = (a) => a;
const segundaFun = (a, b) => {
  return a + b;
};

function terceraFun(a) {
  return function () {};
}

segundaFun(5, 4); // 10 seg
saludar(); // 0 seg
terceraFun(5); // 5 seg
// necesita el resultado de segundaFun()

// la mayoria de metodos de array solicitan un callback----------------
const array = ['perro', 'gato', 'raton', 'loro'];
array.forEach((animal) => `${animal} modificado`);
// array.filter();

function callbackFun(param) {
  return `el usuario escribio: ${param}`;
}

function funDos(p1, callback) {
  const respuesta = callback(p1);
  return respuesta;
}

// console.log(funDos("Buenas noches", callbackFun));

//*Calback anidados ---------------------------------------------------

const usuarios = [];
const familiares = [];

function agregarFamiliar(usuarioId, infoFamiliar) {
  usuarios.findById(usuarioId, function (error, usuario) {
    if (error) {
      return error;
    } else {
      familiares.findAllByLastName(
        usuario.lastname,
        function (error, familiares) {
          if (error) {
            return error;
          } else {
            if (familiares.includes(infoFamiliar)) {
              return 'Este familiar existe';
            } else {
              familiares.createOne(infoFamiliar, function (error) {
                if (error) {
                  return error;
                } else {
                  return 'Familiar creado con exito';
                }
              });
            }
          }
        }
      );
    }
  });
} //! No se recomienda hoy en dia hacer call anidados porque generan callbackshell se utilizan de a uno

//* PROMISES (las promesas son un objeto)-------------------------------------------------------

//* CREAR FUNCION PROMESA-----------------------------------------------------------------------

function promesaFun(a, b) {
  //lo sgte es un callbalck que espera dps parametros
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject('Promise rechazada');
    } else {
      resolve(a + b);
    }
  });
}
// console.log(promesaFun(0, 5)); //rejected
// console.log(promesaFun(2, 5)); //resolved

//* .then . catch-------------------------------------------------------------------------------

promesaFun(5, 7) //-> probar con 0 para ver el error
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

function agregarFamiliar(usuarioId, infoFamiliar) {
  usuarios
    .findById(usuarioId)
    .then((usuario) => {
      return familiares.findAllByLastName(usuario.lastname);
    })
    .then((familiares) => {
      if (familiares.includes(infoFamiliar)) {
        return 'Este familiar ya existe';
      } else {
        return familiares.createOne(infoFamiliar);
      }
    })
    .then(() => {
      return 'Familiar creado con exito';
    })
    .catch((error) => {
      return error;
    });
} // se maneja el error una sola vez

//* async / await (LO QUE SE UTILIZA HOY EN DIA Y LO QUE SE VERA EN EL CURSO)-------------------------------------------------------------------------------

async function agregarFamiliar(usuarioId, infoFamiliar) {
  try {
    const usuario = await usuarios.findById(usuarioId);
    const familiares = await familiares.findAllByLastName(usuario.lastname);
    if (familiares.includes(infoFamiliar)) {
      return 'Este familiar ya existe';
    }
    await familiares.createOne(infoFamiliar);
    return 'Familiar creado con exito';
  } catch (error) {
    return error;
  }
}
