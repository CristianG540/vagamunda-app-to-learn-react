export interface Direccion {
  calle: string;
  ciudad: string;
}

export interface Persona {
  nombre: string;
  telefono: string;
  direccion: Direccion;
  direccionCompleta: string;
  id: string;
}
