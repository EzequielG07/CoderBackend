const fs = require("fs");

// const path = "Usuarios.json"; // -> es una para instancia general

class ManagerUsuarios {
  constructor(path) {
    this.path = path;
  }

  consultarUsuarios = async () => {
    if (fs.existsSync(this.path)) {
      const infoArchivo = await fs.promises.readFile(this.path, "utf-8");
      const usuarios = JSON.parse(infoArchivo);
      return usuarios;
    } else {
      console.log("Archivo no existe");
      return [];
    }
  };

  consutarUsuarioById = async (id) => {
    const usuarios = await this.consultarUsuarios();
    const usuario = usuarios.find((u) => u.id === id);
    if (usuario) {
      return usuario;
    } else {
      return console.log("Usuario no existe");
    }
  };

  crearUsuario = async (usuario) => {
    const usuarios = await this.consultarUsuarios();
    const id = this.#generarId(usuarios);
    const nuevoUsuario = { id, ...usuario };
    usuarios.push(nuevoUsuario);
    await fs.promises.writeFile(this.path, JSON.stringify(usuarios));
    return nuevoUsuario;
  };

  eliminarUsuarios = async () => {
    if (fs.existsSync(this.path)) {
      await fs.promises.unlink(this.path);
      return console.log("Usuarios eliminados");
    } else {
      return console.log("No existe este archivo");
    }
  };

  eliminarUsuarioById = async (id) => {
    const usuarios = await this.consultarUsuarios();
    const arrayUsuariosNuevo = usuarios.filter((u) => u.id !== id);
    await fs.promises.writeFile(this.path, JSON.stringify(arrayUsuariosNuevo));
  };

  actualizarUsuario = async (id, obj) => {
    const usuarios = await this.consultarUsuarios();
    const indexUsuario = usuarios.findIndex((u) => u.id === id);
    if (indexUsuario === -1) {
      return console.log("Usuario para actualizar no encontrado");
    }
    const usuarioActualizado = { ...usuarios[indexUsuario], ...obj }; //?-->primero riego lo viejo y despues riego lo nuevo con el spread...
    usuarios.splice(indexUsuario, 1, usuarioActualizado);
    await fs.promises.writeFile(this.path, JSON.stringify(usuarios));
  };

  #generarId = (usuarios) => {
    let id;
    if (usuarios.length === 0) {
      id = 1;
    } else {
      id = usuarios[usuarios.length - 1].id + 1;
    }
    return id;
  };
}

const usuario1 = {
  nombre: "Juan",
  apellido: "Hoyos",
};

const usuario2 = {
  nombre: "Luis",
  apellido: "Abelino",
};

async function prueba() {
  const manager = new ManagerUsuarios("Usuarios.json"); //?--> el path va ingresado de manera personal aqui.

  //* para crear usuarios:
  // await manager.crearUsuario(usuario1);
  // await manager.crearUsuario(usuario2);

  //* para consultar:
  // const usuarios = await manager.consultarUsuarios();
  // console.log(usuarios);

  //* para consultar por id:
  // const usuarioById = await manager.consutarUsuarioById(2);
  // console.log(usuarioById);

  //* para eliminar por id:
  // await manager.eliminarUsuarioById(6);

  //* para eliminar el archivo completo:
  // await manager.eliminarUsuarios();

  //* para actualizar usuarios:
  // await manager.actualizarUsuario(7, { nombre: "Nicolas", curso: "backend" }); //?--> va actualizar el id numero 7
  // await manager.actualizarUsuario(80, { nombre: "Nicolas", curso: "backend" }); //?--> tira mje de error
}

prueba();

//node ManagerUsuarios.js
