// HANDS ON LAB
class TicketManager {
  #precioBaseDeGanancia = 15;
  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return console.log(this.eventos);
  }

  agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
  }

  #generarId() {
    const id =
      this.eventos.length === 0
        ? 1
        : this.eventos[this.eventos.length - 1].id + 1;
    return id;
  }
}

const manager = new TicketManager();
manager.agregarEventos("evento1", "lugar1", 50);
manager.agregarEventos("evento2", "lugar2", 100);
manager.getEventos();
